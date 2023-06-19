import axios from 'axios';

// 한 개의 이미지 업로드(프로필,상품)
export const uploadImageAPI = async (image) => {
  try {
    const formData = new FormData();
    formData.append('image', image);
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/image/uploadfile',
      formData,
    );

    if (response.data.message) {
      // eslint-disable-next-line no-alert
      alert(`${response.data.message}`);
    }
    return `https://api.mandarin.weniv.co.kr/${response.data.filename}`;
  } catch (error) {
    console.log('이미지 1개 업로드 API 요청 오류', error);
    return null;
  }
};
