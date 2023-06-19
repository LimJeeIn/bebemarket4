import styled from 'styled-components';

export const Nav = styled.nav`
  /* background-color: blue; */
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #dbdbdb;
`;

export const Input = styled.input`
  background: #f2f2f2;
  border-radius: 32px;
  border: none;
  width: 80%;
  max-width: 700px;
  height: 32px;
  padding: 7px 16px;
  font-size: 14px;
  &::placeholder {
    color: #c4c4c4;
  }
`;
export const Button = styled.button`
  width: 22px;
  height: 22px;
`;
