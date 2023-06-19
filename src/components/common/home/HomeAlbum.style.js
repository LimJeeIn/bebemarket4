import styled from 'styled-components';

export const HomeAlbumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 114px);
  grid-template-rows: repeat(3, 114px);
  gap: 8px;

  justify-content: center;
  align-items: center;

  padding: 16px;
`;

export const HomeAlbumItem = styled.div`
  width: 114px;
  height: 114px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
