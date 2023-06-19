import React from 'react';
import { Container, Ul, Li, GrayLine, Button } from '../styled';
export default function ChatModal({ setisModalOpen }) {
  return (
    <>
      <Container onClick={() => setisModalOpen(false)}></Container>
      <Ul>
        <GrayLine></GrayLine>
        <Li>
          <Button>채팅방 나가기</Button>
        </Li>
      </Ul>
    </>
  );
}
