import styled from 'styled-components';
import { DisabledSaveButton } from '../../components/common/button/Button.style';
import { SaveButton } from '../../components/common/button/Button.style';

// 저장 버튼
export const CustomDisabledSaveButton = styled(DisabledSaveButton)`
  width: 90px;
  height: 32px;
  font-weight: 500;
  line-height: 19px;
  cursor: default;
`;

// 입력 값이 다 채워진 후 활성화된 버튼
export const CustomSaveButton = styled(SaveButton)`
  width: 90px;
  height: 32px;
  font-weight: 500;
  line-height: 19px;
`;

// 프로필 이미지
export const ImageContainer = styled.div`
  position: relative;
  width: 110px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
`;

export const EditProfileImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

// 이름, 계정, 소개말
export const ProfileEdit = styled.div`
  text-align: center;

  p {
    color: var(--sub-text-color);
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  }

  input {
    font-size: 14px;
    color: #000;
    border: none;
    padding-bottom: 8px;
    padding-top: 10px;

    &::placeholder {
      color: #dbdbdb;
    }
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  top: calc(100% + 5px); // border-bottom 아래에 텍스트를 위치
  left: 0;
  color: red;
  font-size: 12px;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin: auto;
  text-align: left;
  width: 322px;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 15px;

  input:focus {
    outline: none;
  }

  ${ErrorText} {
    color: red;
  }
`;
