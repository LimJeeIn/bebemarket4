import styled from 'styled-components';
import { SaveButton } from '../../components/common/button/Button.style';
import { BoxLabel } from '../../components/common/input/InputBox.style';

export const CustomSaveButton = styled(SaveButton)`
  width: 90px;
  height: 32px;
  font-weight: 500;
  line-height: 19px;
  cursor: pointer;

  background-color: ${(props) =>
    props.active === true ? '#55BDB3' : '#D9D9D9'};
`;

export const Product = styled.div`
  max-width: 322px;
  width: 100%;
  margin: auto;
  }
`;

export const CustomBoxLabel = styled(BoxLabel)`
  margin-top: 30px;
  margin-bottom: 18px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`;

export const ProductThumbnail = styled.div`
  width: 322px;
  height: 204px;
  // background-color: #f2f2f2;
  // border-radius: 10px;
  // border: 0.5px solid #dbdbdb;
`;

export const uploadFileIcon = styled.img`
  position: absolute;
  bottom: 5.08%;
  right: 3.73%;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

export const ImgUploadInp = styled.input`
  /* ir */
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const ProductImage = styled.img``;
