import axios from 'axios';

// 이메일 로그인
export const emailLoginAPI = async (email, password) => {
  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/user/login',
      {
        user: {
          email,
          password,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    //  undefined 일 때 대비하는 로직
    if (response.data) {
      console.log(response);
      console.log(response.data);
      return response.data;
    } else {
      console.log('응답 데이터가 없습니다.');
      return null;
    }
  } catch (error) {
    console.error('API 요청 오류:', error.message);
    throw new Error(error.message);
  }
};
