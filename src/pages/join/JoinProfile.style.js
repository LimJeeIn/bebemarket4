import styled from 'styled-components';
import ProfileInputImage from '../../assets/images/upload-file.svg';

export const JoinContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;
`;

export const JoinTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 12px;
`;

export const JoinDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: var(--sub-text-color);
`;

export const JoinDiv = styled.div`
  position: relative;
  width: fit-content;
  margin: 30px auto;
`;

export const ProfileImage = styled.img`
  width: 110px;
`;

export const UploadInputLabel = styled.label`
  position: absolute;
  background: url('${ProfileInputImage}') center/cover;

  width: 36px;
  height: 36px;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  cursor: pointer;
`;
export const UploadInput = styled.input`
  display: none;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 36px;
  height: 36px;
`;
