import styled from 'styled-components';
import productImages from '../../../assets/images/product-img-example.png';

export const Product = styled.section`
  max-width: 400px;
  padding: 16px;
  margin: auto;
`;

export const Wrapper = styled.ul`
  display: flex;
  gap: 10px;
`;

export const ProductContent = styled.li`
  flex-shrink: 0;
  width: 140px;
`;

export const ProductImage = styled.div`
  width: 100%;
  padding-bottom: calc(196 / 304 * 100%);
  background-image: url(${productImages});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  border-radius: 8px;
  object-fit: cover;
`;

export const ProductTitle = styled.h3`
  font-size: 14px;
  line-height: 18px;
  padding: 6px 2px 4px;
  color: var(--main-text-color);
`;

export const ProductPrice = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: var(--main-color);
  padding: 0 2px 0;
`;
