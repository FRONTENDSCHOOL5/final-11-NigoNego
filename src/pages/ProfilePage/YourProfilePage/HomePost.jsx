import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import msg from '../../assets/icons/message-icon.svg';
import like from '../../assets/icons/like-icon.svg';
import axios from 'axios';

export default function HomePost() {
  const [userData, setUserData] = useState('');
  // const [userContent, setUserContent] = useState('');
  // const [userImg, setUserImg] = useState('');
  // const [updatedAt, setUpdatedAt] = useState('');
  // const [commentCount, setCommentCount] = useState(0);
  // const [heartCount, setHeartCount] = useState(0);
  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFkMDkxYjJjYjIwNTY2MzM1ZjVmMCIsImV4cCI6MTY5MjAwMjk4NiwiaWF0IjoxNjg2ODE4OTg2fQ.IXRWQpeGB-5D3U3iN4FSKNf2F92wGVA_FLw4SpqLc20';
    try {
      axios({
        method: 'GET',
        url: `https://api.mandarin.weniv.co.kr/post/nigonego/userpost`,

        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }).then(response => {
        setUserData(response.data.post);
        console.log(userData);
      });
    } catch (err) {
      console.log('에러');
    }
  }, []);

  return (
    <>
      {userData.length > 0 &&
        userData.map(data => {
          return (
            <>
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
              <time>{data.updatedAt}</time>
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