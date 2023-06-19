import React from 'react';
import * as S from './PostDetail.style';
import TopBasicNav from '../../components/common/topNav/TopBasicNav';
import HomePost from '../../components/common/home/HomePost';
import CommentInput from '../../components/common/user/Comment';
import PostComment from '../../components/postComment/PostComment';
export default function PostDetail() {
  return (
    <S.Container>
      <TopBasicNav />
      <HomePost />
      <S.Line />
      <PostComment />
      <CommentInput />
    </S.Container>
  );
}
