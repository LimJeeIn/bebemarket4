import React from 'react';
import bebeIcon from '../../assets/images/full-logo.svg';
import logo from '../../assets/images/logo-text.svg';
import moon from '../../assets/images/moon.svg';
import * as S from './Splash.style.js';

export default function Splash() {
  return (
    <S.Container>
      <S.BebeIcon src={bebeIcon} />
      <S.LogoContainer>
        <S.Logo src={logo} />
        <S.Moon src={moon} />
      </S.LogoContainer>
    </S.Container>
  );
}
