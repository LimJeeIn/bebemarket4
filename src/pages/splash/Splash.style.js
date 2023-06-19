import styled from 'styled-components';
import { keyframes } from 'styled-components';

const ImageRotation = keyframes`
from{
  opacity:0.2;
  transform: rotate(360deg) scale(0);
}
to{
  opacity:1;
  transform: rotate(0deg) scale(1);
}
`;

const LogoShow = keyframes`
from{
  transform: translateX(-1000px);
}
to{
  transform: translateX(0)
}
`;
const MoonRotation = keyframes`
from{
  opacity:0;
  transform: translateY(-1000px);
  
}
to{
    opacity: 1;
    transform: translateY(0)
  
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LogoContainer = styled.div`
  position: relative;
`;
export const BebeIcon = styled.img`
  margin-bottom: 50px;
  margin-top: 150px;
  animation-name: ${ImageRotation};
  animation-duration: 2s;
  width: 216px;
  height: 216px;
`;

export const Logo = styled.img`
  animation-name: ${LogoShow};
  animation-duration: 2s;
`;

export const Moon = styled.img`
  position: absolute;
  right: -40px;
  top: -50px;
  animation-name: ${MoonRotation};
  animation-duration: 2s;
  width: 43px;
  height: 49px;
`;
