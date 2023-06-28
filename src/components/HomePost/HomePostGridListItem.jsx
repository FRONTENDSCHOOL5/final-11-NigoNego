import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconImagies } from '../../assets/image/IconImagies.svg';

export default function HomePostGridListItem({ img }) {
  return (
    <GridItemImg>
      {console.log(img)}
      <IconImagiesBtn width="30px" height="30px" />
      <img src={img.image} alt="이미지" />
    </GridItemImg>
  );
}

const GridItemImg = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .noneImg {
    background-color: var(--light-grey);
  }
`;
const IconImagiesBtn = styled(IconImagies)`
  position: absolute;
  top: 6px;
  right: 6px;
`;
