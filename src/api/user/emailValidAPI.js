import axios from 'axios';

// 이메일 검증, 중복 검사
export const emailValidAPI = async (userEmail) => {
  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/user/emailvalid',
      {
        user: {
          email: userEmail,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log('이메일검증 API 요청 오류', error);
    return null;
  }
};
