import axios from 'axios';

export const addProductAPI = async (
  product,
  price,
  salesLink,
  productImage,
  userToken,
) => {
  const endpoint = 'https://api.mandarin.weniv.co.kr/product'; // 오타 수정
  const requestTimeout = 5000; // 5초

  try {
    const response = await axios.post(
      endpoint,
      {
        product: {
          itemName: product,
          price: price,
          link: salesLink,
          itemImage: productImage,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
        timeout: requestTimeout, // 타임아웃 설정
      },
    );

    // 서버에서 반환된 데이터가 있는 경우
    if (response.data) {
      console.log('Response data:', response.data);
      return response.data;
    }

    // 서버에서 반환된 데이터가 없는 경우
    console.log('Empty response:', response);
    return response;
  } catch (error) {
    // axios.post() 함수 호출에서 에러가 발생한 경우
    console.error('Error in addProductAPI:', error.message);
    throw new Error(error.message);
  }
};
