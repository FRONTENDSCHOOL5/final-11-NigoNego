import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import UseFetchToken from '../../Hooks/UseFetchToken';
import UserSearch from '../common/User/UserSearch';
import { ReactComponent as BtnComment } from '../../assets/image/BtnComment.svg';
import Heart from '../common/Heart/Heart';
import { useRecoilValue } from 'recoil';
import accountNameAtom from '../../atom/accountName';
import atomMyData from '../../atom/atomMyData';
import atomYourData from '../../atom/atomYourData';
import atomYourAccount from '../../atom/atomYourAccount';

export default function MyHomePost({ profileMyAccount, postYourAccount }) {
  console.log(profileMyAccount);
  console.log(postYourAccount);
  const { getPostListLimit } = UseFetchToken();
  const atomYourData = useRecoilValue(atomYourAccount);
  const myData = useRecoilValue(atomMyData);
  console.log();
  const myAccount = myData.data.user.accountname;
  const yourAccount = atomYourData.data.profile.accountname;
  const [account, setAccount] = useState();
  const [userData, setUserData] = useState([]);
  const postListRef = useRef(null);
  const [clickedHeart, setClickedHeart] = useState(Boolean(true));

  useEffect(() => {
    console.log(postYourAccount);
    console.log(yourAccount);
    if (postYourAccount === yourAccount) {
      setAccount(yourAccount);
    } else {
      setAccount(myAccount);
    }
  }, [profileMyAccount]);

  function handleClickedHeart(e) {
    e.preventDefault();
    setClickedHeart(!clickedHeart);
  }

  useEffect(() => {
    fetchData();
  }, [account]);

  const fetchData = () => {
    getPostListLimit(account)
      .then(response => {
        setUserData(response.data.post);
      })
      .catch(error => console.log('에러'));
  };

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
                  <Heart userData={data} />
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
