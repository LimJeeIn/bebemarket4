import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 252px;
  border-radius: 10px;
  text-align: center;
  border: 0.5px solid #dbdbdb;
  background-color: white;
`;
export const DeleteConfirm = styled.p`
  padding: 22px 61px;
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
  padding: 14px 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  border-right: 0.5px solid #dbdbdb;
`;
export const DeleteButton = styled.button`
  width: 50%;
  padding: 14px 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #f26e22;
`;
