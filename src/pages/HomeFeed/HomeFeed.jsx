// import React, { useState, useEffect } from 'react';
// import { useRecoilValue } from 'recoil';
// // import { useNavigate } from 'react-router-dom';
// import { authAtom, accountNameAtom } from '../../atom/atoms';
// import { GetHomeFeedData } from '../../api/getData/getData';
// import HomePost from '../../components/HomePost/HomePost';
// import Navbar from '../../components/common/Navbar/Navbar';
// import { HeaderBasicNav } from '../../components/common/Header/Header';
// import BodyGlobal from '../../styles/BodyGlobal';

// function HomeFeed() {
//   // const [postId, setPostId] = useState(null);
//   // const navigate = useNavigate();
//   const auth = useRecoilValue(authAtom);

//   const accountname = useRecoilValue(accountNameAtom);

//   const [feedPost, setFeedPost] = useState([]);

//   useEffect(() => {
//     GetHomeFeedData().then(response => {
//       setFeedPost(response.data.posts);
//       console.log(feedPost);
//     });
//   }, []);

//   return (
//     <>
//       <HeaderBasicNav />
//       <BodyGlobal>
//         {feedPost.length > 0 &&
//           feedPost.map(data => {
//             return <HomePost data={data} />;
//           })}
//         {/* <div>{followresData}</div> */}
//       </BodyGlobal>
//       <Navbar />
//     </>
//   );
// }

// export default HomeFeed;

// /**
//  * 1. 유저를 클릭하면
//  * 2. 해당 유저의
//  * 3. your profile 페이지로 이동
//  * onClick={(e) => {함수1(e)}}
//  * 함수1의 역할1. yourprofile로 이동
//  * 함수1의 역할2. 해당 데이터를 받아와서
//  * useNavigator('/yourprofile')
//  * your profile 페이지에서 특정 유저가 데이터가 선택되는 방법은?
//  */

import React, { useState, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
// import { useNavigate } from 'react-router-dom';
import { authAtom, accountNameAtom } from '../../atom/atoms';
import styled from 'styled-components';
import { GetHomeFeedData } from '../../api/getData/getData';
import HomePost from '../../components/HomePost/HomePost';
import Navbar from '../../components/common/Navbar/Navbar';
import { HeaderBasicNav } from '../../components/common/Header/Header';
import BodyGlobal from '../../styles/BodyGlobal';
import UserSearch from '../../components/common/User/UserSearch';

function HomeFeed() {
  // const [postId, setPostId] = useState(null);
  // const navigate = useNavigate();
  const auth = useRecoilValue(authAtom);

  const accountname = useRecoilValue(accountNameAtom);
  const [userData, setUserData] = useState([]);
  const postListRef = useRef(null);

  useEffect(() => {
    fetchData(0); // 초기 데이터 로드
  }, []);

  const fetchData = (skip = 5) => {
    GetHomeFeedData(skip)
      .then(response => {
        setUserData(prevData => [...prevData, ...response.data.posts]);
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
    <>
      <MyHomePostwarpper ref={postListRef} className="myHomePost">
        <HeaderBasicNav />
        {userData.length > 0 &&
          userData.map(data => {
            return (
              <>
                <BodyGlobal>
                  {userData.length > 0 &&
                    userData.map(data => {
                      return <HomePost data={data} />;
                    })}
                  {/* <div>{followresData}</div> */}
                </BodyGlobal>
                <Navbar />
              </>
            );
          })}
      </MyHomePostwarpper>
      <Navbar />
    </>
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
  height: 90vh;
  overflow: scroll;
  /* box-shadow: inset 0px 0px 3px 5px rgb(0, 38, 255); */

  .icon-wrapper {
    margin: 10px 0;
  }

  .container {
    margin-left: 70px;
    max-width: 700px;
  }
  button {
    border: none;
  }

  .post-item-wrapper {
    margin: 30px 0;
  }
`;

export default HomeFeed;

// return (
//   <>
//     <MyHomePostwarpper ref={postListRef} className="myHomePost">
//       <HeaderBasicNav />
//       {userData.length > 0 &&
//         userData.map(data => {
//           return (
//             <div className="post-item-wrapper">
//               <UserSearch data={data} />
//               <div className="container">
//                 <p>{data.content}</p>
//                 <div className="img-W">
//                   <HomePostImg src={data.image} />
//                 </div>
//                 <div className="icon-wrapper">
//                   <button type="button">
//                     {/* <img src={msg} alt="" /> */}
//                     <span>123</span>
//                   </button>
//                   <button type="button">
//                     {/* <img src={like} alt="" /> */}
//                     <span>123</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//     </MyHomePostwarpper>
//     <Navbar />
//   </>
// );
