import styled from 'styled-components';
import MessageCircleIcon from '../../assets/icon/icon-message-circle-1.svg';
import ShareIcon from '../../assets/icon/icon-share.svg';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: #f2f2f2;
`;

//====프로필====
export const ProfileContainer = styled.div`
  height: auto;
  width: 100%;
  background-color: #fff;
`;

// 프로필 header
export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 41px;
  padding-top: 30px;
  margin-bottom: 14px;
`;

export const Followers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
`;

export const Followings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 프로필 main
export const ProfileMain = styled.div`
  text-align: center;

  & p:first-child {
    font-weight: 700;
    line-height: 22px;
  }

  & p:nth-child(2) {
    font-size: 12px;
    line-height: 14px;
    margin-top: 6px;
    color: var(--sub-text-color);
  }

  & p:nth-child(3) {
    font-size: 14px;
    line-height: 18px;
    margin-top: 16px;
    color: var(--sub-text-color);
  }
`;

// 프로필 footer
export const ProfileFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
  padding-bottom: 26px;

  // DM 메시지 버튼
  .dm-btn {
    border: 1px solid #dbdbdb;
    border-radius: 30px;
    background: url(${MessageCircleIcon}) no-repeat;
    background-position: center center;
    width: 34px;
    height: 34px;
  }

  // 공유하기 버튼
  .share-btn {
    border: 1px solid #dbdbdb;
    border-radius: 30px;
    background: url(${ShareIcon}) no-repeat;
    background-position: center center;
    width: 34px;
    height: 34px;
  }
`;

// ====상품 product====
export const ProductContainer = styled.div`
  width: 100%;
  margin-top: 6px;
  margin: auto;
  background-color: #fff;

  h2 {
    padding: 18px 0 0 21px;
  }
`;

// ====post container====
export const PostContainer = styled.div`
  background-color: #fff;
  height: 553px;
`;

// 피드 정렬
export const ViewOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 22.5px;
  border-bottom: 1px solid #dbdbdb;
  margin: auto;
  padding-right: 12.25px;
  height: 44px;
  background-color: #fff;
`;

// 피드 목록형
export const PostListOn = styled.img`
  cursor: pointer;
  width: 26px;
  height: 26px;
`;

// 피드 앨범형
export const PostAlbumOff = styled.img`
  cursor: pointer;
  width: 26px;
  height: 26px;
`;
