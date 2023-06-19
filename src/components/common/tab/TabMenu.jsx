import React from 'react';
import * as S from './TabMenu.style.js';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import homeIcon from '../../../assets/icon/icon-home.svg';
import chatIcon from '../../../assets/icon/icon-message-circle-1.svg';
import editIcon from '../../../assets/icon/icon-edit.svg';
import userIcon from '../../../assets/icon/icon-user.svg';
import coloredHomeIcon from '../../../assets/icon/icon-home-fill.svg';
import coloredChatIcon from '../../../assets/icon/icon-message-circle-fill.svg';
import coloredUserIcon from '../../../assets/icon/icon-user-fill.svg';

export default function TabMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const UseColoredHomeIcon = () => {
    const { pathname } = location;
    if (pathname === '/home' || pathname === '/search') {
      return true;
    }
    if (pathname.includes('/profile/')) {
      const accountname = pathname.split('/')[2]; // '/profile/abc'.split('/')[2] ==>abc
      const MyAccountname = '내accountname'; // localstorage.getItem으로 가져와야할듯?
      if (accountname === MyAccountname) {
        return false;
      } //else{return true} 일수도
    }
  };

  const UseColoredChatIcon = () => {
    const { pathname } = location; //이거 걍 const location밑에 써도되는지 나중에확인하기
    if (pathname === '/chat') {
      return true;
    } else {
      return false;
    }
  };

  const UseColoredUserIcon = () => {
    const { pathname } = location; //이거 걍 const location밑에 써도되는지 나중에확인하기
    if (pathname === '/profile/${Myaccountname}') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <S.Nav>
      <S.Ul>
        <li onClick={() => navigate('/home')}>
          <S.Img src={UseColoredHomeIcon() ? coloredHomeIcon : homeIcon} />
          <S.P>홈</S.P>
        </li>
        <li onClick={() => navigate('/chat')}>
          <S.Img src={UseColoredChatIcon() ? coloredChatIcon : chatIcon} />
          <S.P>채팅</S.P>
        </li>
        <li onClick={() => navigate('/uploadpost')}>
          <S.Img src={editIcon} />
          <S.P>게시물 작성</S.P>
        </li>
        <li onClick={() => navigate('/profile/${Myaccountname}')}>
          <S.Img src={UseColoredUserIcon() ? coloredUserIcon : userIcon} />
          <S.P>프로필</S.P>
        </li>
      </S.Ul>
    </S.Nav>
  );
}

//<li onClick={() => navigate('/profile/${Myaccountname}')}> 이거 백틱으로 사용해야하나?
