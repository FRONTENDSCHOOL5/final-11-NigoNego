import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import { GetPostListLimit } from '../../api/getData/getData';
import UserSearch from '../common/User/UserSearch';
import { ReactComponent as BtnHeart } from '../../assets/image/BtnHeart.svg';
import { ReactComponent as BtnComment } from '../../assets/image/BtnComment.svg';
import { click } from '@testing-library/user-event/dist/click';
import Heart from '../common/Heart/Heart';

export default function MyHomePost({ accountname }) {
  const [userData, setUserData] = useState([]);
  const postListRef = useRef(null);

  const [clickedHeart, setClickedHeart] = useState(Boolean(true));

  function handleClickedHeart(e) {
    e.preventDefault();
    setClickedHeart(!clickedHeart);
  }

  useEffect(() => {
    fetchData(0); // 초기 데이터 로드
  }, []);

  const fetchData = (skip = 3) => {
    GetPostListLimit(skip, accountname)
      .then(response => {
        setUserData(prevData => [...prevData, ...response.data.post]);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = postListRef.current;
      if (container) {
        const { scrollTop, clientHeight, scrollHeight } = container;
        if (scrollTop + clientHeight >= scrollHeight) {
          const skip = userData.length;
          fetchData(skip);
        }
      }
    };
    const postList = postListRef.current;
    if (postList) {
      postList.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (postList) {
        postList.removeEventListener('scroll', handleScroll);
      }
    };
  }, [userData]);

  return (
    <MyHomePostwarpper ref={postListRef} className="myHomePost">
      {userData.length > 0 &&
        userData.map(data => {
          return (
            <div className="post-item-wrapper">
              <UserSearch data={data} />
              <div className="container">
                <p>{data.content}</p>
                <div className="img-W">
                  <HomePostImg src={data.image} />
                </div>
                <div className="icon-wrapper">
                  <button type="button" className="btn">
                    <BtnComment width="24px" height="24px" stroke="#767676" />
                    <span>{data.commentCount}</span>
                  </button>
                  <Heart />
                </div>
              </div>
            </div>
          );
        })}
    </MyHomePostwarpper>
  );
}

const HomePostImg = styled.img`
  width: 90%;
  aspect-ratio: 5 / 3;
  border-radius: 10px;
  object-fit: cover;
`;

const MyHomePostwarpper = styled.div`
  height: 640px;
  overflow: scroll;
  /* box-shadow: inset 0px 0px 3px 5px rgb(0, 38, 255); */

  .icon-wrapper {
    margin: 10px 0;
    display: flex;
  }

  .container {
    margin-left: 70px;
    max-width: 700px;

    .post-item-wrapper {
      padding: 10px 0;

      button {
        padding: 0 10px 0 0;
      }
    }

    p {
      margin: 0 0 10px 0;
    }
  }
  button {
    border: none;
  }

  .btn {
    border: none;
    padding: 0 10px 0 0;
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
`;

export { MyHomePost, HomePostImg, MyHomePostwarpper };
