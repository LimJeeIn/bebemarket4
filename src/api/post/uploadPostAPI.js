import axios from 'axios';
import { apiURL } from '../apiURL';

export const uploadPostAPI = async (sendData, token) => {
  try {
    //오류나면 {sendData} 이렇게 감싸보기
    const response = await axios.post(`${apiURL}post`, sendData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('포스트 업로드 API 요청 에러', error);
  }
};
