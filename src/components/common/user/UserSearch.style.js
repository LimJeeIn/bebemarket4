import styled from 'styled-components';
import { SmallFollowButton } from '../button/Button.style';

export const UserBox = styled.div`
  display: flex;
  width: 358px;
  height: 50px;
`;
export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 12px;
`;
export const RightBox = styled.div`
  padding: 6px 0;
`;
export const UserTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 6px;
`;
export const UserAddress = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: var(--sub-text-color);
`;

export const CustomFollowButton = styled(SmallFollowButton)`
  padding: 7px 10px;
  margin: 10px 0px 10px 113px;
`;
