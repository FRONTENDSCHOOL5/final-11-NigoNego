import MyHomePost from '../../../components/HomePost/MyHomePost';
import Product from '../../../components/Product/Product';
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader';
import Navbar from '../../../components/common/Navbar/Navbar';
import { HeaderBasicNav } from '../../../components/common/Header/Header';
import BodyGlobal from '../../../styles/BodyGlobal';
import PostAlignChangeBut from './../YourProfilePage/PostAlignChangeBut';
import { useLocation } from 'react-router-dom';

export default function MyProfilePage() {
  const userName = useLocation();
  console.log(userName.state);

  return (
    <>
      <HeaderBasicNav />
      <BodyGlobal>
        <ProfileHeader accountname={userName.state.user} />
        <Product accountname={userName.state.user} />
        <PostAlignChangeBut />
        <MyHomePost accountname={userName.state.user} />
      </BodyGlobal>
      <Navbar />
    </>
  );
}
