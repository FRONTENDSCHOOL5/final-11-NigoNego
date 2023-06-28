import React, { useEffect, useState } from 'react';
import { ReactComponent as BtnHeartF } from './../../../assets/icons/BtnHeartF.svg';
import { PostHeartData, DeleteHeart } from '../../../api/getData/getData';

export default function Heart() {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState('0');

  function HeartCount() {
    if (like) {
      DeleteHeart().then(response => {
        setLike(response.data.post.hearted);
        setLikeCount(response.data.post.heartCount);
        console.log(response.data.post.heartCount);
      });
    } else {
      PostHeartData().then(response => {
        setLike(response.data.post.hearted);
        setLikeCount(response.data.post.heartCount);
      });
    }
  }

  return (
    <button type="button" className="btn" onClick={HeartCount}>
      {console.log(1111)}
      <BtnHeartF
        fill={like ? '#EF4343' : '#fff'}
        stroke={like ? '#EF4343' : '#767676'}
      />
      <span>{likeCount}</span>
    </button>
  );
}

export { Heart };
