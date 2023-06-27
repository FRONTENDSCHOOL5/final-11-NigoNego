import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconImagies } from '../../assets/image/IconImagies.svg';

export default function HomePostGridListItem({ img }) {
  return (
    <GridItemImg>
      {console.log(img)}
      <IconImagiesBtn width="30px" height="30px" />
      <img src={img.image} alt={img.image} />
    </GridItemImg>
  );
}

const GridItemImg = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const IconImagiesBtn = styled(IconImagies)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
