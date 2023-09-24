import React, { useEffect, useState } from 'react';
import { ReactComponent as BtnHeartF } from './../../../assets/icons/BtnHeartF.svg';
import UseFetchToken from '../../../Hooks/UseFetchToken';

export default function Heart({ userData }) {
  const [like, setLike] = useState(userData.hearted);
  const [likeCount, setLikeCount] = useState(0);
  const { postHeart, deleteHeart } = UseFetchToken();

  const HeartCount = () => {
    setLike(!like);
  };

  useEffect(() => {
    if (like) {
      postHeart(userData.id).then(res =>
        setLikeCount(res.data.post.heartCount),
      );
      // postHeart(userId.id).then(res => console.log(res));
    } else {
      deleteHeart(userData.id).then(res =>
        setLikeCount(res.data.post.heartCount),
      );
    }
  }, [like]);

  return (
    <button type="button" className="btn" onClick={HeartCount}>
      <BtnHeartF
        fill={like ? '#EF4343' : '#fff'}
        stroke={like ? '#EF4343' : '#767676'}
      />
      <span>{likeCount}</span>
    </button>
  );
}
