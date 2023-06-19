import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 공통 컴포넌트
import TopBasicNav from '../../components/common/topNav/TopBasicNav';
import Product from '../../components/common/product/Product';
import HomePost from '../../components/common/home/HomePost';
import HomeAlbum from '../../components/common/home/HomeAlbum';
import TabMenu from '../../components/common/tab/TabMenu';

// 스타일
import * as S from './Profile.style';

// 이미지
import basicProfileImage from '../../assets/images/basic-profile-img.svg';
import postListOn from '../../assets/icon/icon-post-list-on.svg';
import postAlbumOff from '../../assets/icon/icon-post-album-off.svg';

export default function MyProfile() {
  const navigate = useNavigate();

  const handleUploadProductButtonClick = () => {
    navigate('/product');
  };

  const [isListMode, setIsListMode] = useState(true);

  return (
    <div>
      <TopBasicNav />
      <S.ProfileWrapper>
        <S.ProfileContainer>
          <S.ProfileHeader>
            <S.Followers>
              <span>2950</span>
              <span>followers</span>
            </S.Followers>
            <S.ProfileImage src={basicProfileImage} alt="프로필 사진" />
            <S.Followings>
              <span>128</span>
              <span>followings</span>
            </S.Followings>
          </S.ProfileHeader>
          <S.ProfileMain>
            <p>애월읍 위니브 감귤농장</p>
            <p>@ weniv_Mandarin</p>
            <p>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</p>
          </S.ProfileMain>
          <S.ProfileFooter>
            <S.EditProfileButton>프로필 수정</S.EditProfileButton>
            <S.UploadProductButton onClick={handleUploadProductButtonClick}>
              상품 등록
            </S.UploadProductButton>
          </S.ProfileFooter>
        </S.ProfileContainer>
        <S.ProductContainer>
          <h2>판매 중인 상품</h2>
          <Product />
        </S.ProductContainer>
        <S.PostContainer>
          <S.ViewOptions>
            <S.PostListOn
              src={postListOn}
              alt="피드 목록형으로 보기"
              onClick={() => setIsListMode(true)}
            ></S.PostListOn>
            <S.PostAlbumOff
              src={postAlbumOff}
              alt="피드 앨범형으로 보기"
              onClick={() => setIsListMode(false)}
            ></S.PostAlbumOff>
          </S.ViewOptions>
          {isListMode ? <HomePost /> : <HomeAlbum />}
        </S.PostContainer>
      </S.ProfileWrapper>
      <TabMenu />
    </div>
  );
}
