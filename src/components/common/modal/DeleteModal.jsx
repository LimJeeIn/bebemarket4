import React from 'react';
import * as S from './DeleteModal.style';

function DeleteModal(props) {
  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.DeleteConfirm>상품을 삭제할까요?</S.DeleteConfirm>
        <S.ButtonDiv>
          <S.CancelButton>취소</S.CancelButton>
          <S.DeleteButton>삭제</S.DeleteButton>
        </S.ButtonDiv>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
}

export default DeleteModal;
