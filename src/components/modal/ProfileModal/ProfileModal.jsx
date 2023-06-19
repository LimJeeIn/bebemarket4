import React, { useState } from 'react';
import { Container, Ul, Li, GrayLine, Button } from '../styled';
import ProfileAlert from './ProfileAlert';
export default function ProfileModal({ setisModalOpen }) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  return (
    <>
      <Container onClick={() => setisModalOpen(false)}></Container>
      <Ul>
        <GrayLine></GrayLine>
        <Li>
          <Button>설정 및 개인정보</Button>
        </Li>
        <Li>
          <Button onClick={() => setIsAlertOpen(true)}>로그아웃</Button>
        </Li>
      </Ul>
      {isAlertOpen ? <ProfileAlert setIsAlertOpen={setIsAlertOpen} /> : null}
    </>
  );
}
