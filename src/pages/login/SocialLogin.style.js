import styled from 'styled-components';

import KakaoIcon from '../../assets/images/message-circle.png';
import GoogleIcon from '../../assets/images/google.png';
import FacebookIcon from '../../assets/images/facebook.png';

export const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--main-color);
`;

export const SymbolLogoImage = styled.img`
  margin: auto;
  width: 144px;
  height: 144px;
  object-fit: contain;
`;

export const LoginAccountContainer = styled.div`
  padding-top: 50px;
  width: 100%;
  height: 330px;
  border-radius: 20px 20px 0 0;
  background-color: #fff;
`;

export const SocialLoginAccount = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  list-style: none;
`;

export const AccountButton = styled.button`
  width: 322px;
  height: 44px;
  border-radius: 44px;
  background-color: #fff;
  color: var(--sub-text-color);

  &.kakao-account {
    background-image: url(${KakaoIcon});
    background-repeat: no-repeat;
    background-position: 17px center;
    border: 1px solid #f2c94c;
  }

  &.google-account {
    background-image: url(${GoogleIcon});
    background-repeat: no-repeat;
    background-position: 17px center;
    border: 1px solid #767676;
  }

  &.facebook-account {
    background-image: url(${FacebookIcon});
    background-repeat: no-repeat;
    background-position: 17px center;
    border: 1px solid #2d9cdb;
  }
`;

export const LoginSigninContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const LoginSigninButton = styled.button`
  background-color: #fff;
  border: none;
  color: var(--sub-text-color);

  &.login-email::after {
    content: '|';
    margin: 0 10px;
    color: var(--sub-text-color);
  }
`;
