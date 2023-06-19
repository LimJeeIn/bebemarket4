import styled from 'styled-components';

export const Box = styled.div`
  width: 322px;
  height: 48px;
  margin-bottom: 30px;
`;

export const BoxLabel = styled.label`
  width: 100%;
  display: block;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 10px;
  color: var(--sub-text-color);
`;

export const BoxInput = styled.input`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  padding: 10px 0 8px;
  color: var(--main-text-color);
  border: none;
  border-bottom: ${(props) =>
    props.boderBottomColor === 'on'
      ? '1px solid red'
      : '1px solid var(--main-disabled-color)'};
  &::placeholder {
    color: var(--main-disabled-color);
  }
  :focus {
    outline: none;
    border-bottom: 1px solid var(--main-color);
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: #eb5757;
  font-weight: 500;
  height: 20px;

  line-height: 14px;
  margin: 10px 0;
  display: ${(props) => (props.show === 'on' ? 'block' : 'none')};
`;
