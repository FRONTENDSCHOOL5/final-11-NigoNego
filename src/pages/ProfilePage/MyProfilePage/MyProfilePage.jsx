// import { HeaderBasicNav } from '../../../components/common/Header/Header';
// import Navbar from '../../../components/common/Navbar/Navbar';
// import MyProfileHeader from '../../../components/ProfileHeader/MyProfileHeader';
// import Product from '../../../components/Product/Product';
// import HomePost from '../../../components/HomePost/HomePost';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// function MyProfilePage() {
//   const [productData, setProductData] = useState('');

//   useEffect(() => {
//     try {
//       axios({
//         method: 'GET',
//         url: `https://api.mandarin.weniv.co.kr/product/nigonego`,

//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-type': 'application/json',
//         },
//       }).then(response => {
//         console.log(123123);
//         setProductData(response.data.post);
//         // 왜 object가 출력이 되는지...?
//         console.log(`product ${response}`);
//       });
//     } catch (err) {
//       console.log('에러');
//     }
//   }, []);
//   return (
//     <div>
//       <HeaderBasicNav />
//       <MyProfileHeader />
//       <Product />
//       {userData.length > 0 && <HomePost userDataProps={userData} />}
//       <Navbar />
//     </div>
//   );
// }

// export default MyProfilePage;

import React from 'react';
// import HomePost from '../../../components/HomePost/HomePost';
// import Product from '../../../components/Product/Product';
import ProfileUser from '../../../components/ProfileHeader/ProfileUser';
export default function MyProfilePage() {
  return (
    <div>
      <ProfileUser />
      {/* <Product />
      <HomePost /> */}
    </div>
  );
}
