import React from 'react';
import {
  AlertContainer,
  DeleteConfirm,
  ButtonDiv,
  CancelButton,
  DeleteButton,
} from '../styled';
export default function PostAlert({ setIsAlertOpen }) {
  const deletePost = () => {};
  return (
    <AlertContainer>
      <DeleteConfirm>삭제하시겠어요?</DeleteConfirm>
      <ButtonDiv>
        <CancelButton
          onClick={() => {
            setIsAlertOpen(false);
          }}
        >
          취소
        </CancelButton>
        <DeleteButton onClick={deletePost}>삭제</DeleteButton>
      </ButtonDiv>
    </AlertContainer>
  );
}
