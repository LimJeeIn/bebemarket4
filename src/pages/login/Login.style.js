import styled from 'styled-components';
import { NextButton } from '../../components/common/button/Button.style';

export const LoginMain = styled.div`
  width: 320px;
  margin: 80px auto;
`;
export const LoginForm = styled.form``;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 40px;
  text-align: center;
`;

export const CustomNextButton = styled(NextButton)`
  margin-top: 30px;
  background-color: ${(props) =>
    props.active === true ? '#D9D9D9' : '#55BDB3'};
`;

export const JoinEmail = styled.a`
  width: 100%;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
  color: var(--sub-text-color);
  margin-top: 20px;
  cursor: pointer;
`;
