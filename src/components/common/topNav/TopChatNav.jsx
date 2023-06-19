import React, { useState } from 'react';
import * as S from './TopChatNav.style.js';
import arrowLeft from '../../../assets/icon/icon-arrow-left.svg';
import verticalIcon from '../../../assets/icon/icon- more-vertical.svg';
import { useNavigate } from 'react-router-dom';
import ChatModal from '../../modal/ChatModal/ChatModal.jsx';
export default function TopChatNav() {
  const [isModalOpen, setisModalOpen] = useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    setisModalOpen(true);
  };
  return (
    <>
      <S.Nav>
        <S.LeftDiv>
          <S.arrowButton onClick={() => navigate(-1)}>
            <img src={arrowLeft} alt="뒤로가기" />
          </S.arrowButton>
          <S.P>애월읍 위니브 감귤농장</S.P>
        </S.LeftDiv>

        <S.verticalButton onClick={showModal}>
          <img src={verticalIcon} alt="더보기" />
        </S.verticalButton>
      </S.Nav>
      {isModalOpen ? <ChatModal setisModalOpen={setisModalOpen} /> : null}
    </>
  );
}
