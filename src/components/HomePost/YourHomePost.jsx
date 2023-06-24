import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import msg from '../../assets/icons/message-icon.svg';
import like from '../../assets/icons/like-icon.svg';
import axios from 'axios';
import UserSearch from '../common/User/UserSearch';

export default function YourHomePost({ accountname }) {
  const [userData, setUserData] = useState(accountname);
  const [userPost, setUserPost] = useState({});
  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFkMDkxYjJjYjIwNTY2MzM1ZjVmMCIsImV4cCI6MTY5MjAwMjk4NiwiaWF0IjoxNjg2ODE4OTg2fQ.IXRWQpeGB-5D3U3iN4FSKNf2F92wGVA_FLw4SpqLc20';
    try {
      axios({
        method: 'GET',
        url: `https://api.mandarin.weniv.co.kr/post/${userData}/userpost`,
        // url: `https://api.mandarin.weniv.co.kr/profile/${userData}/following`, //isfollow이슈
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }).then(response => {
        setUserPost(response.data.post);
      });
    } catch (err) {
      console.log('에러');
    }
  }, [userData]);

  return (
    <>
      {userPost.length > 0 &&
        userPost.map(data => {
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
