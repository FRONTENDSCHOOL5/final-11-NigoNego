import MyHomePost from '../../../components/HomePost/MyHomePost';
import Product from '../../../components/Product/Product';
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader';
import Navbar from '../../../components/common/Navbar/Navbar';
import { HeaderBasicNav } from '../../../components/common/Header/Header';
import BodyGlobal from '../../../styles/BodyGlobal';
import PostAlignChangeBut from './../YourProfilePage/PostAlignChangeBut';

export default function MyProfilePage() {
  return (
    <>
      <HeaderBasicNav />
      <BodyGlobal>
        <ProfileHeader />
        <Product />
        <PostAlignChangeBut />
        <MyHomePost />
      </BodyGlobal>
      <Navbar />
    </>
  );
}
