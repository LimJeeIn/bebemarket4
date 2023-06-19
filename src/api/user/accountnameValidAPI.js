import axios from 'axios';

// 계정 검증, 계정 중복 검사
export const accountnameValidAPI = async (userID) => {
  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/user/accountnamevalid',
      {
        user: {
          accountname: userID,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log('계정검증 API 요청 오류', error);
    return null;
  }
};
