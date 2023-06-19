import React from 'react';
import Profile from '../../../assets/images/basic-profile.svg';
import * as S from './UserSearch.style';

function UserSearch(props) {
  return (
    <S.UserBox>
      <S.ProfileImage src={Profile} alt="프로필 이미지" />
      <S.RightBox>
        <S.UserTitle>애월읍 위니브 감귤농장</S.UserTitle>
        <S.UserAddress>@ weniv_Mandarin</S.UserAddress>
      </S.RightBox>
      <S.CustomFollowButton>팔로우</S.CustomFollowButton>
    </S.UserBox>
  );
}

export default UserSearch;
