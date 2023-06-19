import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 12px 12px 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #dbdbdb;
`;

export const P = styled.p`
  //margin: 0; //글로벌에서 reset 하면 margin:0 되는지확인하기
  margin-left: 10px;
  font-size: 14px;
  align-self: center;
`;

export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const arrowButton = styled.button`
  width: 22px;
  height: 22px;
`;

export const verticalButton = styled.button`
  width: 24px;
  height: 24px;
`;
