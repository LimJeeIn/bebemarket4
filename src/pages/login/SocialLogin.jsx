import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../login/SocialLogin.style';
import SymbolLogo from '../../assets/images/symbol-logo.svg';

export const SocialLogin = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <S.SocialLoginContainer>
        <S.SymbolLogoImage src={SymbolLogo} alt="아기얼굴 심볼" />
        <S.LoginAccountContainer>
          <S.SocialLoginAccount>
            <li>
              <S.AccountButton className="kakao-account">
                카카오톡 계정으로 로그인
              </S.AccountButton>
            </li>
            <li>
              <S.AccountButton className="google-account">
                구글 계정으로 로그인
              </S.AccountButton>
            </li>
            <li>
              <S.AccountButton className="facebook-account">
                페이스북 계정으로 로그인
              </S.AccountButton>
            </li>
          </S.SocialLoginAccount>
          <S.LoginSigninContainer>
            <S.LoginSigninButton
              className="login-email"
              onClick={() => handleButtonClick('/login')}
            >
              이메일로 로그인
            </S.LoginSigninButton>
            <S.LoginSigninButton
              className="sign-in"
              onClick={() => handleButtonClick('/join/signup')}
            >
              회원가입
            </S.LoginSigninButton>
          </S.LoginSigninContainer>
        </S.LoginAccountContainer>
      </S.SocialLoginContainer>
    </div>
  );
};

export default SocialLogin;
