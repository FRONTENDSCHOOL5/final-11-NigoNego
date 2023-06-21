import React from 'react';
import styled from 'styled-components';
import msg from '../../assets/icons/message-icon.png';

export default function HomePost({ userDataProps }) {
  console.log(userDataProps);
  return (
    <HomPostWrapp>
      {userDataProps.map((item, index) => {
        return (
          <>
            <p key={index}>{item.content}</p>
            <HomePostImg src={item.image} />
            <div>
              <button type="button">
                <img src={item.author.image} alt="" />
                <span>58</span>
              </button>
              <button type="button">
                <img src={msg} alt="" />
                <span>12</span>
              </button>
            </div>
            <time>2222년 00년 00월</time>
          </>
        );
      })}
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
