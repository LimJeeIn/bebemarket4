import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopUploadNav from '../../components/common/topNav/TopUploadNav';
import { uploadImageAPI } from '../../api/uploadImg/uploadImageAPI';
import { addProductAPI } from '../../api/product/addProductAPI';

import { useRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import { accountNameState, userTokenState } from '../../atoms/Atoms';

import * as S from './UploadProduct.style';
import InputBox from '../../components/common/input/InputBox';
import uploadFileIcon from '../../assets/images/upload-file.svg';
import uploadFileImage from '../../assets/images/img-upload-preview.svg';

export default function UploadProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState('');
  const [productError, setProductError] = useState('');
  const [isProductValid, setIsProductValid] = useState(false);

  const [price, setPrice] = useState('');
  const [priceError, setPriceError] = useState('');
  const [isPriceValid, setIsPriceValid] = useState(false);

  const [salesLink, setSalesLink] = useState('');
  const [salesLinkError, setSalesLinkError] = useState('');
  const [isSalesLinkValid, setIsSalesLinkValid] = useState(false);

  const [isProductRed, setIsProductRed] = useState(false);
  const [isPriceRed, setIsPriceRed] = useState(false);
  const [isSalesLinkRed, setIsSalesLinkRed] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [productImage, setProductImage] = useState(uploadFileImage);

  const [userToken, setUserToken] = useRecoilState(userTokenState);
  const [accountName, setAccountName] = useState('');

  // 상품명 유효성 검사
  const handleProductChange = (e) => {
    const currentProduct = e.target.value;
    setProduct(currentProduct);
    if (currentProduct === '') {
      setIsProductRed(true);
      setIsProductValid(false);
      setProductError('* 상품명을 입력해주세요.');
    } else if (currentProduct.length < 2 || currentProduct.length >= 15) {
      setIsProductRed(true);
      setIsProductValid(false);
      setProductError('* 2~15자 이내여야 합니다.');
    } else {
      setIsProductRed(false);
      setIsProductValid(true);
      setProductError('');
    }
  };

  // 가격 유효성 검사
  const handlePriceChange = (e) => {
    const currentPrice = e.target.value;

    // ","를 제거한 숫자 문자열 리턴
    const filteredPrice = currentPrice.replace(/,/g, '');

    const priceRegex = /^[0-9]+$/;

    if (filteredPrice === '') {
      setIsPriceValid(false);
      setPrice('');
      setPriceError('* 가격을 입력해주세요.');
    } else if (!priceRegex.test(filteredPrice)) {
      setIsPriceRed(true);
      setIsPriceValid(false);
      setPriceError('* 숫자만 입력해주세요.');
      setPrice('NaN');
    } else {
      const parsedPrice = parseInt(filteredPrice);

      setIsPriceRed(false);
      setIsPriceValid(true);
      setPriceError('');

      // 천 단위 쉼표 추가
      const formattedPrice = parsedPrice.toLocaleString();
      setPrice(formattedPrice);
      e.target.value = formattedPrice;
    }
  };

  // 판매 링크 유효성 검사
  const handleSalesLinkChange = (e) => {
    const currentSalesLink = e.target.value;
    setSalesLink(currentSalesLink);
    const salesLinkRegex =
      /^(https|http):\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/;

    if (currentSalesLink === '') {
      setIsSalesLinkValid(false);
      setSalesLinkError('* URL을 입력해주세요.');
    } else if (!salesLinkRegex.test(currentSalesLink)) {
      setIsSalesLinkRed(true);
      setIsSalesLinkValid(false);
      setSalesLinkError('* URL을 입력해주세요.');
    } else {
      setIsSalesLinkRed(false);
      setIsSalesLinkValid(true);
      setSalesLinkError('');
    }
  };

  // 버튼 활성화
  useEffect(() => {
    if (product && price && salesLink && productImage !== uploadFileImage) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [product, price, salesLink, productImage]);

  // 이미지 업로드
  const uploadImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      uploadImageAPI(image).then((img) => {
        setProductImage(img);
      });
    }
  };

  // 상품 등록 데이터 전송
  const addProduct = async (e) => {
    e.preventDefault();

    if (!isButtonDisabled) {
      try {
        const result = await addProductAPI(
          product,
          Number(price.replaceAll(',', '')),
          salesLink,
          productImage,
          userToken, // 전달받은 userToken 사용
        );
        alert('상품 등록이 완료되었습니다.'); // eslint-disable-line no-alert
        setUserToken(userToken);
        navigate(`/profile/${accountName}`);

        console.log(result.data.token);
        return result.data.token;
      } catch (error) {
        console.log(error);
      }

      // try {
      //   const response = await addProductAPI(
      //     product,
      //     price,
      //     salesLink,
      //     productImage,
      //   );
      //   console.log(response);
      // } catch (error) {
      //   console.error(error);
      // }
    }
  };
  return (
    <div>
      <TopUploadNav>
        {
          <S.CustomSaveButton active={isButtonDisabled} onClick={addProduct}>
            저장
          </S.CustomSaveButton>
        }
      </TopUploadNav>
      <S.Product>
        <form onSubmit={addProduct}>
          <S.CustomBoxLabel>이미지 업로드</S.CustomBoxLabel>
          <S.ImageContainer>
            <S.ProductThumbnail>
              <label htmlFor="product">
                <S.uploadFileIcon
                  src={uploadFileIcon}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                />
              </label>
              <input
                type="file"
                id="product"
                accept="image/*"
                onChange={uploadImage}
                style={{ display: 'none' }}
              />
              <S.ProductImage src={productImage} alt="uploaded product" />
            </S.ProductThumbnail>
          </S.ImageContainer>

          <InputBox
            label="상품명"
            id="product"
            type="text"
            placeholder={'2~15자 이내여야 합니다.'}
            onChange={handleProductChange}
            value={product}
            borderBottomColor={isProductRed ? 'on' : null}
            show={isProductRed ? 'on' : null}
            errorMessage={productError}
          />
          <InputBox
            label="가격"
            id="price"
            type="text"
            placeholder={'숫자만 입력 가능합니다.'}
            onChange={handlePriceChange}
            value={price}
            borderBottomColor={isPriceRed ? 'on' : null}
            show={isPriceRed ? 'on' : null}
            errorMessage={priceError}
          />
          <InputBox
            label="판매링크"
            id="salesLink"
            type="text"
            placeholder={'URL을 입력해 주세요.'}
            onChange={handleSalesLinkChange}
            value={salesLink}
            borderBottomColor={isSalesLinkRed ? 'on' : null}
            show={isSalesLinkRed ? 'on' : null}
            errorMessage={salesLinkError}
          />
        </form>
      </S.Product>
    </div>
  );
}
