import React, { useState } from 'react';
import * as S from './TopBasicNav.style.js';
import arrowLeft from '../../../assets/icon/icon-arrow-left.svg';
import verticalIcon from '../../../assets/icon/icon- more-vertical.svg';
import { useNavigate } from 'react-router-dom';
import ProfileModal from '../../modal/ProfileModal/ProfileModal.jsx';
export default function TopBasicNav() {
  const [isModalOpen, setisModalOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setisModalOpen(true);
  };
  return (
    <>
      <S.Nav>
        <S.arrowButton onClick={() => navigate(-1)}>
          <img src={arrowLeft} alt="뒤로가기" />
        </S.arrowButton>
        <S.verticalButton onClick={showModal}>
          <img src={verticalIcon} alt="더보기" />
        </S.verticalButton>
      </S.Nav>
      {isModalOpen ? <ProfileModal setisModalOpen={setisModalOpen} /> : null}
    </>
  );
}
