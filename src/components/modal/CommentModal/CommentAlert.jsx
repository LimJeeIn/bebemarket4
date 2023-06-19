import React from 'react';
import {
  AlertContainer,
  DeleteConfirm,
  ButtonDiv,
  CancelButton,
  DeleteButton,
} from '../styled';

export default function CommentAlert({ setIsAlertOpen, content }) {
  const deleteComment = () => {
    console.log('댓글삭제기능구현하셈');
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
        <DeleteButton onClick={() => deleteComment()}>삭제</DeleteButton>
      </ButtonDiv>
    </AlertContainer>
  );
}
//수정해야함
//<DeleteConfirm>{content} 하시겠어요?</DeleteConfirm>
//<DeleteButton>{content}</DeleteButton>
