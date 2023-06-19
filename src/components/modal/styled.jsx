import styled from 'styled-components';
//import { keyframes } from 'styled-components';
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.3);
  font-family: 'SUITE-Regular';
`;

export const Button = styled.button`
  font-family: inherit;
`;
export const Ul = styled.ul`
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #ffffff;
  padding-bottom: 15px;
  border-radius: 10px 10px 0px 0px;
  z-index: 10;
`;

export const Li = styled.li`
  padding: 14px 26px;
`;

export const GrayLine = styled.div`
  min-width: 50px;
  width: 15%;
  height: 4px;
  margin: 0 auto;
  background: #dbdbdb;
  border-radius: 5px;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const AlertContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 260px;
  border-radius: 10px;
  text-align: center;
  border: 0.5px solid #dbdbdb;
  background-color: white;
  z-index: 10;
`;

export const DeleteConfirm = styled.p`
  padding: 22px 60px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  border-bottom: 0.5px solid #dbdbdb;
`;
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const CancelButton = styled.button`
  width: 50%;
  padding: 14px 35px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  border-right: 0.5px solid #dbdbdb;
  font-family: inherit;
`;
export const DeleteButton = styled.button`
  width: 50%;
  padding: 14px 35px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--main-color);
  font-family: inherit;
`;
