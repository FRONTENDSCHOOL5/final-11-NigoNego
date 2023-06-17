import React from 'react';
import styled from 'styled-components';
import homePostImg from '../../assets/images/home-post-img.png';
import likeIcon from '../../assets/icons/like-icon.png';
import msg from '../../assets/icons/message-icon.png';

export default function HomePost() {
  return (
    <HomPostWrapp>
      <p>
        옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
        이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
        뛰노는 인생의 힘있다.
      </p>
      <HomePostImg src={homePostImg} />
      <div>
        <button type="button">
          <img src={likeIcon} alt="" />
          <span>58</span>
        </button>
        <button type="button">
          <img src={msg} alt="" />
          <span>12</span>
        </button>
      </div>
      <time>2222년 00년 00월</time>
    </HomPostWrapp>
  );
}

const HomPostWrapp = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 54px;

  p {
    font-size: 1.4rem;
  }

  button {
    width: 60px;
    padding: 0 15px 15px 0;
    border: none;
    text-align: left;
    color: var(--basic-grey);

    img {
      width: 15px;
      vertical-align: middle;
    }

    span {
      padding: 5px;
    }
  }

  time {
    color: var(--basic-grey);
  }
`;

const HomePostImg = styled.img`
  vertical-align: middle;
  padding-bottom: 10px;
`;
