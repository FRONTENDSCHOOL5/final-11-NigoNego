import React from 'react';
import styled from 'styled-components';

function Image({ src, alt }) {
  return (
    <ImageStyle>
      <img src={src} alt={alt} />
    </ImageStyle>
  );
}

export default Image;

const ImageStyle = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  text-align: center;
`;
