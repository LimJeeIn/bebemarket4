import React, { useState } from 'react';
import ProfileImage from '../../../assets/images/basic-profile.svg';
import * as S from './Comment.style';

function Comment(props) {
  const [comment, setComment] = useState('');
  const [disabled, setDisabled] = useState(true);
  const handleChange = (event) => {
    setComment(event.target.value);
    if (event.target.value.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleSubmit = () => {};
  return (
    <S.CommentBox>
      <S.CommentProfile src={ProfileImage} alt={'(user이름)님의 프로필사진'} />
      <label htmlFor="commentInput" className="a11y-hidden">
        댓글 입력창
      </label>
      <S.CommentInput
        placeholder="댓글 입력하기..."
        id="commentInput"
        value={comment}
        onChange={handleChange}
      />
      <S.PostButton onClick={handleSubmit} disabled={disabled}>
        게시
      </S.PostButton>
    </S.CommentBox>
  );
}

export default Comment;
