import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './JoinProfile.style';
import { CustomNextButton } from './SignUp.style';

import InputBox from '../../components/common/input/InputBox';
import DefaultProfileImage from '../../assets/images/basic-profile-img.svg';

// API
import { accountnameValidAPI } from '../../api/user/accountnameValidAPI';
import { uploadImageAPI } from '../../api/uploadImg/uploadImageAPI';
import { joinAPI } from '../../api/user/joinAPI';

function JoinProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = location.state?.email;
  const userPassword = location.state?.password;

  const [image, setImage] = useState(DefaultProfileImage);
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const [introduction, setIntroduction] = useState('');

  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isUserIdValid, setIsUserIdValid] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const [userIdErrorMessage, setUserIdErrorMessage] = useState('');
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');

  // 이미지 업로드
  const uploadImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      uploadImageAPI(image).then((img) => {
        setImage(img);
      });
    }
  };

  // username 유효성 검사
  const handleUserNameValid = (e) => {
    const currentUsername = e.target.value;
    setUsername(currentUsername);
    if (currentUsername === '') {
      setIsUsernameValid(false);
      setUsernameErrorMessage('');
    } else if (currentUsername.length >= 2) {
      setIsUsernameValid(true);
      setUsernameErrorMessage('');
    } else {
      setIsUsernameValid(false);
      setUsernameErrorMessage('* 2~10자로 작성해주세요');
    }
  };

  // userId 유효성 검사
  const handleUserIdValid = (e) => {
    const currentUserId = e.target.value;
    setUserId(currentUserId);
    setUserIdErrorMessage('');
    const regex = /^[_A-Za-z0-9.]*$/;
    if (currentUserId === '') {
      setIsUserIdValid(false);
    } else if (regex.test(currentUserId)) {
      setIsUserIdValid(true);
      setUserIdErrorMessage('');
    } else {
      setIsUserIdValid(false);
      setUserIdErrorMessage('* 영문, 숫자, 밑줄, 마침표만 입력할 수 있습니다.');
    }
  };

  // userId 중복 검사 (api)
  const handleUserIdDuplicateValid = async (e) => {
    const testAccountname = e.target.value;
    setUserId(testAccountname);
    const validMessage = await accountnameValidAPI(testAccountname);
    if (validMessage?.message === '이미 가입된 계정ID 입니다.') {
      setIsUserIdValid(false);
      setUserIdErrorMessage('* 이미 사용 중인 ID입니다.');
    } else {
      setIsUserIdValid(true);
    }
  };

  // handle introduction
  const handleUserIntroduction = (e) => {
    setIntroduction(e.target.value);
  };

  // 버튼 활성화
  useEffect(() => {
    if (username.length > 0 && isUserIdValid) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [username, isUserIdValid]);

  // 회원가입
  const handleJoin = async (e) => {
    e.preventDefault();
    await joinAPI(
      username,
      userEmail,
      userPassword,
      userId,
      introduction,
      image,
    );
    navigate('/sociallogin');
  };
  return (
    <S.JoinContainer>
      <S.JoinTitle>프로필 설정</S.JoinTitle>
      <S.JoinDescription>나중에 언제든지 변경할 수 있습니다.</S.JoinDescription>
      <form onSubmit={handleJoin}>
        <S.JoinDiv>
          <S.ProfileImage src={image} alt="회원가입 유저 프로필 이미지" />
          <S.UploadInputLabel htmlFor="uploadInput" />
          <S.UploadInput
            type="file"
            id="uploadInput"
            alt="회원가입 프로필 업로드 이미지"
            accept="image/"
            onChange={uploadImage}
          />
        </S.JoinDiv>

        <InputBox
          label="사용자 이름"
          id="userName"
          placeholder="2~10자 이내여야 합니다."
          value={username}
          min="2"
          max="10"
          onChange={handleUserNameValid}
          borderBottomColor={isUsernameValid ? null : 'on'}
          show={isUsernameValid ? null : 'on'}
          errorMessage={usernameErrorMessage}
        />
        <InputBox
          label="계정 ID"
          id="userId"
          type="userId"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          value={userId}
          onBlur={handleUserIdDuplicateValid}
          onInput={handleUserIdValid}
          borderBottomColor={isUserIdValid ? null : 'on'}
          show={isUserIdValid ? null : 'on'}
          errorMessage={userIdErrorMessage}
        />
        <InputBox
          label="소개"
          id="userIntroduction"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          value={introduction}
          onChange={handleUserIntroduction}
        />
        <CustomNextButton type="submit" active={isButtonActive}>
          베베마켓 시작하기
        </CustomNextButton>
      </form>
    </S.JoinContainer>
  );
}

export default JoinProfile;
