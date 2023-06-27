import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import msg from '../../assets/icons/message-icon.svg';
import like from '../../assets/icons/like-icon.svg';
import { GetPostListLimit } from '../../api/getData/getData';
import UserSearch from '../common/User/UserSearch';

export default function MyHomePost({ accountname }) {
  const [userData, setUserData] = useState([]);
  const postListRef = useRef(null);

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
                  <button type="button">
                    <img src={msg} alt="" />
                    <span>123</span>
                  </button>
                  <button type="button">
                    <img src={like} alt="" />
                    <span>123</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </MyHomePostwarpper>
  );
}

const HomePostImg = styled.img`
  width: 86%;
  aspect-ratio: 5 / 3;
  background: orange;
  border-radius: 10px;
  object-fit: cover;
`;

const MyHomePostwarpper = styled.div`
  height: 640px;
  overflow: scroll;
  /* box-shadow: inset 0px 0px 3px 5px rgb(0, 38, 255); */

  .icon-wrapper {
    margin: 10px 0;
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
`;

export { MyHomePost, HomePostImg, MyHomePostwarpper };
