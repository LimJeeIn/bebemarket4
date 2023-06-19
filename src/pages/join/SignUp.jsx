import React, { useEffect, useState } from 'react';
import * as S from './SignUp.style';
import { useNavigate } from 'react-router-dom';
import InputBox from '../../components/common/input/InputBox';
import { emailValidAPI } from '../../api/user/emailValidAPI';

function SignUp() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [isButtonActive, setIsButtonActive] = useState('');

  // 유저이메일 유효성검사
  const handleEmailValid = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    setEmailErrorMessage('');
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (currentEmail === '') {
      setIsEmailValid(false);
    } else if (regex.test(currentEmail)) {
      setIsEmailValid(true);
      setEmailErrorMessage('');
    } else {
      setIsEmailValid(false);
      setEmailErrorMessage('*올바르지 않은 이메일 형식입니다.');
    }
  };

  // 유저이메일 중복검사 emailValidAPI사용
  const handleEmailDuplicateValid = async (e) => {
    const testUserEmail = e.target.value;
    setEmail(testUserEmail);
    const validMessage = await emailValidAPI(testUserEmail);
    if (validMessage?.message === '이미 가입된 이메일 주소 입니다.') {
      setIsEmailValid(false);
      setIsEmailDuplicated(false);
      setEmailErrorMessage('*이미 가입된 이메일 주소입니다.');
    } else if (validMessage?.message === '사용 가능한 이메일 입니다.') {
      setIsEmailDuplicated(true);
      // setEmail(testUserEmail);
    }
  };

  // 비밀번호 유효성 검사
  const handlePasswordValid = (e) => {
    const passwordCurrentValue = e.target.value;
    setPassword(e.target.value);
    if (passwordCurrentValue === '') {
      setIsPasswordValid(false);
      setPasswordErrorMessage('');
    } else if (passwordCurrentValue.length < 6) {
      setIsPasswordValid(false);
      setPasswordErrorMessage('비밀번호는 6자 이상이어야 합니다.');
    } else if (passwordCurrentValue.length >= 6) {
      setIsPasswordValid(true);
      setPasswordErrorMessage('');
    }
  };

  // 회원가입 버튼 활성화
  useEffect(() => {
    if (isEmailValid && password.length >= 6 && isEmailDuplicated) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [isEmailValid, isPasswordValid, isEmailDuplicated]);

  return (
    <>
      <S.JoinWrapper>
        <S.JoinTitle>이메일로 회원가입</S.JoinTitle>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <InputBox
            label="이메일"
            id="id"
            type="email"
            placeholder="이메일 주소를 입력해주세요"
            onChange={handleEmailValid}
            onBlur={handleEmailDuplicateValid}
            value={email}
            borderBottomColor={isEmailValid ? null : 'on'}
            show={isEmailValid ? null : 'on'}
            errorMessage={emailErrorMessage}
          />
          <InputBox
            label="비밀번호"
            id="password"
            type="password"
            placeholder="비밀번호를 설정해주세요"
            onChange={handlePasswordValid}
            value={password}
            borderBottomColor={isPasswordValid ? null : 'on'}
            show={isPasswordValid ? null : 'on'}
            errorMessage={passwordErrorMessage}
          />

          <S.CustomNextButton
            onClick={() => {
              navigate('/join/profile', { state: { email, password } });
            }}
            active={isButtonActive}
          >
            다음
          </S.CustomNextButton>
        </form>
      </S.JoinWrapper>
    </>
  );
}

export default SignUp;
