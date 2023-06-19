import React from 'react';
import {
  AlertContainer,
  DeleteConfirm,
  ButtonDiv,
  CancelButton,
  DeleteButton,
} from '../styled';
import { useNavigate } from 'react-router-dom';

export default function ProfileAlert({ setIsAlertOpen }) {
  const navigate = useNavigate();
  const goSocialLogin = () => {
    navigate('/socialLogin');
    //이거 추후에 변경될듯. 로그아웃되게끔 토큰 뺏어와야할듯?
  };

  return (
    <AlertContainer>
      <DeleteConfirm>로그아웃 하시겠어요?</DeleteConfirm>
      <ButtonDiv>
        <CancelButton
          onClick={() => {
            setIsAlertOpen(false);
          }}
        >
          취소
        </CancelButton>
        <DeleteButton onClick={goSocialLogin}>로그아웃</DeleteButton>
      </ButtonDiv>
    </AlertContainer>
  );
}
