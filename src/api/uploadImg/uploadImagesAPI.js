import axios from 'axios';
import { apiURL } from '../apiURL';
// 한 개의 이미지 업로드(프로필,상품)
export const uploadImagesAPI = async (formData) => {
  try {
    const response = await axios.post(`${apiURL}image/uploadfiles`, formData);

    return response.data;
  } catch (error) {
    console.log('이미지 여러개 업로드 API 요청 오류', error);
    return null;
  }
};
