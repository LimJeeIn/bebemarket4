import React from 'react';
import arrowLeft from '../../../assets/icon/icon-arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import * as S from './TopUploadNav.style.js';
export default function TopUploadNav({ disabled, children, handleUpload }) {
  const navigate = useNavigate();
  return (
    <S.Nav>
      <S.ArrowButton onClick={() => navigate(-1)}>
        <img src={arrowLeft} alt="뒤로가기" />
      </S.ArrowButton>

      {/* 기본 버튼은 업로드 이지만 필요한 경우 
      children prop을 통해 다른 버튼을 전달받아 사용
          예제:
          <TopUploadNav>
            <CustomButton>저장</CustomButton>
          </TopUploadNav>
      */}
      {children ? (
        children
      ) : (
        <S.UploadButton
          type="button"
          className={disabled ? 'disabled' : ''}
          onClick={handleUpload}
        >
          업로드
        </S.UploadButton>
      )}
    </S.Nav>
  );
}
