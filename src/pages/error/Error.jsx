import React from 'react';
import errorIcon from '../../assets/images/error-404.svg';
import * as S from './Error.style';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.ErrorIcon src={errorIcon} />
      <p>페이지를 찾을 수 없습니다. :&#40;</p>
      <S.ReturnButton onClick={() => navigate(-1)}>이전 페이지</S.ReturnButton>
    </S.Container>
  );
}
