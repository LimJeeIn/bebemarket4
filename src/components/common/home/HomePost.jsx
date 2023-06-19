import React, { useState } from 'react';
import * as S from './HomePost.style';
import PostModal from '../../modal/PostModal/PostModal';

function HomePost() {
  const [isModalOpen, setisModalOpen] = useState(false);
  const showModal = () => {
    setisModalOpen(true);
  };
  return (
    <>
      <S.Wrapper>
        <S.Article>
          <S.UserImage></S.UserImage>
          <S.PostWapper>
            <S.PostHeader>
              <S.Title>
                애월읍 위니브 감귤농장
                <S.SubTitle>@ weniv_Mandarin</S.SubTitle>
              </S.Title>
              <S.MoreButton onClick={showModal}></S.MoreButton>
            </S.PostHeader>
            <S.PostDetail>
              <S.Content>
                옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
                뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
                넣는 풍부하게 뛰노는 인생의 힘있다.
              </S.Content>
              <S.ContentImage></S.ContentImage>
            </S.PostDetail>
            <S.PostIconWrapper>
              <S.Like>
                <S.LikeIcon></S.LikeIcon>
                <S.LikeCount>58</S.LikeCount>
              </S.Like>
              <S.Comment>
                <S.CommentIcon></S.CommentIcon>
                <S.CommentCount>12</S.CommentCount>
              </S.Comment>
            </S.PostIconWrapper>
            <S.PostDate>2020년 10월 21일</S.PostDate>
          </S.PostWapper>
        </S.Article>
      </S.Wrapper>
      {isModalOpen ? <PostModal setisModalOpen={setisModalOpen} /> : null}
    </>
  );
}
export default HomePost;
