import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import msg from '../../assets/icons/message-icon.svg';
import like from '../../assets/icons/like-icon.svg';
import { GetHomePostData } from '../../api/getData/getData';
import UserSearch from '../common/User/UserSearch';

export default function MyHomePost() {
  const [myPost, setMyPost] = useState({});
  // const [postData, setPostData] = useState('');

  useEffect(() => {
    GetHomePostData().then(response => {
      setMyPost(response.data.post);
      console.log(myPost);
    });
  }, []);

  return (
    <>
      {myPost.length > 0 &&
        myPost.map(data => {
          return (
            <>
              <UserSearch data={data} />
              <p>{data.content}</p>
              <HomePostImg src={data.image} />
              <div>
                <button type="button">
                  <img src={msg} alt="" />
                  <span>123</span>
                </button>
                <button type="button">
                  <img src={like} alt="" />
                  <span>123</span>
                </button>
              </div>
            </>
          );
        })}
    </>
  );
}

const HomePostImg = styled.img`
  vertical-align: middle;
  padding-bottom: 10px;
  width: 500px;
`;
