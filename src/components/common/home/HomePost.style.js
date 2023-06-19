import styled from 'styled-components';
import userImage from '../../../assets/images/basic-profile.svg';
import moreButton from '../../../assets/icon/s-icon-more-vertical.svg';
import contentImages from '../../../assets/images/post-img-example.png';
import likeIcon from '../../../assets/icon/icon-heart.svg';
import commentIcon from '../../../assets/icon/icon-message-circle-1.svg';

export const Wrapper = styled.section`
  max-width: 400px;
  /* padding: 16px; */
  margin: auto;
`;

export const Article = styled.article`
  display: flex;
  padding: 16px;
`;

export const UserImage = styled.div`
  background-image: url(${userImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  object-fit: cover;
  width: 42px;
  height: 42px;
  margin-right: 12px;
  cursor: pointer;
`;

export const PostWapper = styled.div`
  width: 316px;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  color: var(--main-text-color);
`;

export const SubTitle = styled.p`
  display: block;
  font-size: 12px;
  line-height: 14px;
  color: var(--sub-text-color);
  padding-top: 2px;
`;

export const MoreButton = styled.button`
  background-image: url(${moreButton});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: #fff;
  object-fit: cover;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const PostDetail = styled.div`
  margin-top: 16px;
`;

export const Content = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: var(--main-text-color);
  white-space: pre-wrap;
  word-break: break-all;
`;

export const ContentImage = styled.div`
  background-image: url(${contentImages});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  object-fit: cover;
  width: 100%;
  aspect-ratio: auto 304/228;
  vertical-align: top;
  margin-top: 16px;
`;

export const PostIconWrapper = styled.div`
  display: flex;
  gap: 18px;
  padding: 12px 0 16px;
`;

export const Like = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;

export const LikeIcon = styled.div`
  background-image: url(${likeIcon});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  object-fit: cover;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const LikeCount = styled.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--sub-text-color);
`;

export const Comment = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;

export const CommentIcon = styled.div`
  background-image: url(${commentIcon});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  object-fit: cover;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const CommentCount = styled.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--sub-text-color);
`;

export const PostDate = styled.span`
  font-size: 10px;
  line-height: 12px;
  color: var(--sub-text-color);
`;
