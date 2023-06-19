import styled from 'styled-components';
import userImage from '../../assets/images/basic-profile.svg';

export const Wrapper = styled.div`
  max-width: 390px;
  margin: 0 auto;
`;
export const Container = styled.div`
  display: flex;
  padding: 20px 16px 0 16px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4px;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserImage = styled.div`
  background-image: url(${userImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  object-fit: cover;
  width: 36px;
  height: 36px;
  margin-right: 12px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  color: var(--main-text-color);
  margin-right: 6px;
  display: inline-block;
`;
export const WrittenTime = styled.p`
  color: var(--sub-text-color);
  font-size: 10px;
  font-weight: 400;
  display: inline-block;
`;

export const MoreButton = styled.button`
  width: 20px;
  height: 20px;
`;

export const CommentContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  padding-left: 64px;
  padding-right: 16px;
  color: var(--main-text-color);
`;
