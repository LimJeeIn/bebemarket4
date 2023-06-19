import { useState, useRef, useEffect } from 'react';
import React from 'react';
//import * as S from './index.style.js';
import BasicProfileImg from '../../assets/images/Ellipse-1.png';
import TopUploadNav from '../../components/common/topNav/TopUploadNav.jsx';
import * as S from './UploadPost.style';

import { uploadImagesAPI } from '../../api/uploadImg/uploadImagesAPI';
import { uploadPostAPI } from '../../api/post/uploadPostAPI';
import { getMyInfoAPI } from '../../api/user/getMyInfoAPI';
import { apiURL } from '../../api/apiURL';
import { useRecoilValue } from 'recoil';
import { userTokenState, accountNameState } from '../../atoms/Atoms';
import { useNavigate } from 'react-router-dom';

export default function UploadPost() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [textLength, setTextLength] = useState(0);
  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [myProfileImg, setMyProfileImg] = useState('');
  const navigate = useNavigate();
  const token = useRecoilValue(userTokenState);
  const accountname = useRecoilValue(accountNameState);
  // useEffect(() => {
  //   console.log(selectedImages.join(', '));
  // }, [selectedImages]);

  useEffect(() => {
    //console.log(token);
    getMyInfoAPI(token).then((data) => {
      setMyProfileImg(data.user.image); //프로필 사진 가져오기
    });
  }, []);

  const textRef = useRef(null);
  const handleTextArea = (e) => {
    setTextLength(e.target.value.length);
    setText(e.target.value);
    if (e.target.value.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  //내가 보낼 데이터
  const sendData = {
    post: {
      content: text,
      image: selectedImages.join(','), //"imageurl1, imageurl2" 형식으로 보내야한다.
    },
  };

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();

    formData.append('image', file);
    if (selectedImages.length >= 3) {
      alert('이미지는 최대 3장까지 선택할 수 있습니다.');
    } else {
      uploadImagesAPI(formData).then((data) => {
        setSelectedImages([...selectedImages, `${apiURL}${data[0].filename}`]);
      });
      // .then(() => {
      //   console.log(sendData);
      // });
      //.then(()=>{console.log(selectedImages)})
      //상태 업데이트 함수인 setSelectedImages는 비동기적으로 동작하기 때문에,
      //console.log 문이 실행되는 시점에서는 상태가 아직 업데이트되지 않은 상태입니다.
    }
  };

  //textarea 높이 조절
  const handleResizeHeight = () => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  };

  const handleDeleteImage = (index) => {
    setSelectedImages((prevSelectedImages) => {
      const updatedImages = [...prevSelectedImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  // 업로드 버튼
  const handleUpload = () => {
    uploadPostAPI(sendData, token).then((data) => console.log(data));
    navigate(`/profile/${accountname}`);
  };

  //TopUploadNav 폰트패밀리가 SUITE이 아님.
  return (
    <S.Container>
      <TopUploadNav disabled={disabled} handleUpload={handleUpload} />
      <S.Main>
        <S.ImgProfile src={myProfileImg ? myProfileImg : BasicProfileImg} />
        <S.Article>
          <form id="게시물">
            <S.TextArea
              onInput={handleResizeHeight}
              maxLength="300"
              ref={textRef}
              onChange={handleTextArea}
              rows={1}
              placeholder="게시글 입력하기.."
            ></S.TextArea>
            <S.TextLengthWrap>
              <p>{textLength}/300자</p>
            </S.TextLengthWrap>
            <S.Label htmlFor="InputImg">
              <S.InputImg
                type="file"
                id="InputImg"
                name="Input-img"
                accept="image/*"
                onChange={handleImageSelect}
                multiple
              />
            </S.Label>
          </form>
          <section>
            {selectedImages &&
              (selectedImages.length === 1 ? (
                <S.SingleImgCont>
                  <S.SingleImg src={selectedImages[0]} alt="" />
                  <S.RemoveButton
                    type="button"
                    onClick={() => handleDeleteImage(0)}
                  ></S.RemoveButton>
                </S.SingleImgCont>
              ) : (
                <S.MultipleImgScrollCont>
                  {selectedImages.map((image, index) => (
                    <S.MultipleImgCont key={index}>
                      <S.MultipleImg src={image} alt="" />
                      <S.RemoveButton
                        type="button"
                        onClick={() => handleDeleteImage(index)}
                      ></S.RemoveButton>
                    </S.MultipleImgCont>
                  ))}
                </S.MultipleImgScrollCont>
              ))}
          </section>
        </S.Article>
      </S.Main>
    </S.Container>
  );
}

//textarea height 는 한줄쓰면 18px,두줄쓰면 36px, 세줄쓰면 48px
//html form바깥에서 submit하는 방법 https://negabaro.github.io/archive/how-to-post-button-out-to-form

// const file = event.target.files[0];

// const fileReader = new FileReader();
// fileReader.readAsDataURL(file);
// fileReader.onload = (event) => {
//   const result = event.target.result;
//   setPreviewImages([...previewImages, result]);
// };
