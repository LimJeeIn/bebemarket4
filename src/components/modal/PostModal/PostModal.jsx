import React, { useState } from 'react';
import { Container, Ul, Li, GrayLine, Button } from '../styled';
import PostAlert from './PostAlert';
import { useNavigate } from 'react-router-dom';

export default function PostModal({ setisModalOpen }) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const navigate = useNavigate();
  const handleToEdit = () => {
    navigate('/post/edit/${postId}'); //백틱으로 나중에바꿔주기
  };
  return (
    <>
      <Container onClick={() => setisModalOpen(false)}></Container>
      <Ul>
        <GrayLine></GrayLine>
        <Li>
          <Button onClick={() => setIsAlertOpen(true)}>삭제</Button>
        </Li>
        <Li>
          <Button onClick={handleToEdit}>수정</Button>
        </Li>
        <Li>
          <Button>신고</Button>
        </Li>
      </Ul>
      {isAlertOpen ? <PostAlert setIsAlertOpen={setIsAlertOpen} /> : null}
    </>
  );
}
//수정해야할것
//내 포스트면 삭제와 수정 Li가 떠야하고, 남의 포스트면 신고Li만 떠야한다.
