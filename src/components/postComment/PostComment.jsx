import React, { useState } from 'react';
import * as S from './PostComment.style';
import moreIcon from '../../assets/icon/icon- more-vertical.svg';
import CommentModal from '../modal/CommentModal/CommentModal';
export default function PostComment() {
  const [isModalOpen, setisModalOpen] = useState(false);

  const showModal = () => {
    setisModalOpen(true);
  };
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <div>
            <S.UserImage />
            <S.Title>서귀포시 무슨농장</S.Title>
            <S.WrittenTime>· 5분 전</S.WrittenTime>
          </div>
          <S.MoreButton onClick={showModal}>
            <img src={moreIcon} />
          </S.MoreButton>
        </S.Container>
        <S.CommentContent>
          요것도 테스트! 안녕하세요 사진이넘옙흐네요 요기는 어디인가요?
        </S.CommentContent>
      </S.Wrapper>
      {isModalOpen ? <CommentModal setisModalOpen={setisModalOpen} /> : null}
    </>
  );
}
