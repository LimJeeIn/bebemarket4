import React, { useState } from 'react';
import { Container, Ul, Li, GrayLine, Button } from '../styled';
import CommentAlert from './CommentAlert';

export default function CommentModal({ setisModalOpen, content }) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  return (
    <>
      <Container onClick={() => setisModalOpen(false)}></Container>
      <Ul>
        <GrayLine></GrayLine>
        <Li>
          <Button onClick={() => setIsAlertOpen(true)}>삭제</Button>
        </Li>
      </Ul>
      {isAlertOpen ? (
        <CommentAlert setIsAlertOpen={setIsAlertOpen} content={content} />
      ) : null}
    </>
  );
}

//<Button onClick={() => setIsAlertOpen(true)}>{content}</Button>
//{content} 는 삭제 또는 신고
