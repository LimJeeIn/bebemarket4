import React from 'react';
import * as S from './TopMainNav.style.js';
import searchIcon from '../../../assets/icon/icon-search.svg';
import { useNavigate } from 'react-router-dom';

export default function TopMainNav() {
  const navigate = useNavigate();
  return (
    <S.Nav>
      <S.Title>감귤마켓 피드</S.Title>
      <S.Button onClick={() => navigate('/search')}>
        <img src={searchIcon} alt="검색 아이콘" />
      </S.Button>
    </S.Nav>
  );
}
