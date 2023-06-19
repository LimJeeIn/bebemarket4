import React from 'react';
import Profile from '../../../assets/images/basic-profile.svg';
import * as S from './UserFollow.style';

function UserFollow(props) {
  return (
    <S.UserBox>
      <S.ProfileImage src={Profile} alt="프로필 이미지" />
      <S.RightBox>
        <S.UserTitle>
          <S.Span>애월읍</S.Span> 위니브 감귤농장
        </S.UserTitle>
        <S.UserAddress>@ weniv_Mandarin</S.UserAddress>
      </S.RightBox>
    </S.UserBox>
  );
}

export default UserFollow;
