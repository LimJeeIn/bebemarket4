import styled from 'styled-components';
import { NextButton } from '../../components/common/button/Button.style';

export const JoinWrapper = styled.div`
  width: 320px;
  margin: 80px auto;
`;

export const JoinTitle = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 40px;
  text-align: center;
`;

export const CustomNextButton = styled(NextButton)`
  background-color: ${(props) =>
    props.active === true ? '#55BDB3' : '#D9D9D9'};
`;
