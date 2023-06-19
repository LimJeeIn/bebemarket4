import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Login.style';

import InputBox from '../../components/common/input/InputBox';
import { emailLoginAPI } from '../../api/user/emailLoginAPI';
import {
  userTokenState,
  isLoginState,
  accountNameState,
} from '../../atoms/Atoms';
import { useSetRecoilState } from 'recoil';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [isEmailRed, setIsEmailRed] = useState(false);
  const [isPasswordRed, setIsPasswordRed] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const setUserToken = useSetRecoilState(userTokenState); // 로그인 성공시 토큰 저장
  const setIsLoginState = useSetRecoilState(isLoginState); // 로그인 상태 관리
  const setAccountNameData = useSetRecoilState(accountNameState); // 로그인 성공시 계정ID 저장

  // 이메일 입력 시 유효성 검사
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailValue === '') {
      setEmailValid(false);
    } else if (!emailReg.test(emailValue)) {
      setIsEmailRed(true);
      setEmailValid(false);
      setEmailError('* 올바른 이메일 형식이 아닙니다');
    } else {
      setIsEmailRed(false);
      setEmailValid(true);
      setEmailError('');
    }
  };

  // 비밀번호 입력 시 유효성 검사
  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    if (passwordValue.length < 6) {
      setPasswordValid(false);
      setPasswordError('비밀번호는 6자 이상이어야 합니다.');
      setIsPasswordRed(true);
    } else {
      setPasswordValid(true);
      setPasswordError('');
      setIsPasswordRed(false);
    }
  };

  // 이메일,비밀번호 유효성이 확인됐을 때 로그인 버튼 활성화
  useEffect(() => {
    if (emailValid && passwordValid) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [emailValid, passwordValid]);

  // 로그인 버튼 클릭 시 서버에 로그인 요청
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!isButtonDisabled) {
      const data = await emailLoginAPI(email, password);

      // 로그인 성공 시 토큰 및 사용자 정보 저장
      if (!data || !data.user || !data.user.token) {
        setIsPasswordRed(true);
        setPasswordError('*이메일 또는 비밀번호가 일치하지 않습니다.');
      } else {
        setIsLoginState(true);
        setUserToken(data.user.token);
        setAccountNameData(data.user.accountname);
        navigate('/home');
      }
    }
  };

  return (
    <>
      <S.LoginMain>
        <S.Title>로그인</S.Title>
        <S.LoginForm onSubmit={handleLogin}>
          {/* InputBox 컴포넌트 사용 */}
          <InputBox
            label="이메일"
            id="userEmail"
            type="email"
            onChange={handleEmailChange}
            value={email}
            borderBottomColor={isEmailRed ? 'on' : null}
            show={isEmailRed ? 'on' : null}
            errorMessage={emailError}
          />
          <InputBox
            label="비밀번호"
            id="userPassword"
            type="password"
            onChange={handlePasswordChange}
            value={password}
            borderBottomColor={isPasswordRed ? 'on' : null}
            show={isPasswordRed ? 'on' : null}
            errorMessage={passwordError}
          />
        </S.LoginForm>
        {
          <S.CustomNextButton onClick={handleLogin} active={isButtonDisabled}>
            로그인
          </S.CustomNextButton>
        }

        <S.JoinEmail onClick={() => navigate('/join/signup')}>
          이메일로 회원가입
        </S.JoinEmail>
      </S.LoginMain>
    </>
  );
}

export default Login;
