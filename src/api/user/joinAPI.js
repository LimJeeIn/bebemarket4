import axios from 'axios';

// 회원가입
export const joinAPI = async (
  username,
  email,
  password,
  accountname,
  intro,
  image,
) => {
  try {
    const response = await axios.post('https://api.mandarin.weniv.co.kr/user', {
      user: {
        username,
        email,
        password,
        accountname,
        intro,
        image,
      },
    });
    return response.data;
  } catch (error) {
    console.log('회원가입 API 요청 오류', error);
    return null;
  }
};
