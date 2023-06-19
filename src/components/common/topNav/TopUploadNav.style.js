import styled from 'styled-components';

export const UploadButton = styled.button`
  width: 90px;
  height: 32px;
  border: none;
  background: var(--main-color);
  border-radius: 32px;
  color: #ffffff;
  cursor: pointer;

  &.disabled {
    background: var(--main-disabled-color);
    cursor: default;
  }
`;

export const Nav = styled.nav`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #dbdbdb;
`;

export const ArrowButton = styled.button`
  width: 22px;
  height: 22px;
`;
