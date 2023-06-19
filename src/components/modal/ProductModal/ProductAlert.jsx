import React from 'react';
import {
  AlertContainer,
  DeleteConfirm,
  ButtonDiv,
  CancelButton,
  DeleteButton,
} from '../styled';

export default function ProductAlert({ setIsAlertOpen }) {
  const deleteProduct = () => {
    console.log('상품삭제하셈');
  };
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
        <DeleteButton onClick={() => deleteProduct()}>삭제</DeleteButton>
      </ButtonDiv>
    </AlertContainer>
  );
}
