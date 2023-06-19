import React from 'react';
import * as S from './Product.style';

function Product() {
  return (
    <S.Product>
      <S.Wrapper>
        <S.ProductContent>
          <S.ProductImage />
          <S.ProductTitle>애월읍 노지 감귤</S.ProductTitle>
          <S.ProductPrice>35,000원</S.ProductPrice>
        </S.ProductContent>
      </S.Wrapper>
    </S.Product>
  );
}
export default Product;
