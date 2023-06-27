import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartSplash from '../pages/SplashPage/StartSplash';
import LoginMain from '../pages/LoginMain/LoginMain';
import LoginPage from '../pages/LoginPage/LoginPage';
import JoinPage from '../pages/JoinPage/JoinPage';
import HomeFeed from '../pages/HomeFeed/HomeFeed';
import ChatPage from '../pages/ChatPage/ChatPage';
import ChatRoom from '../pages/ChatPage/ChatRoom';
import PostUploadPage from '../pages/PostPage/PostUpload/PostUpload';
import ProductPage from '../pages/ProductPage/ProductPage';
import MyProfilePage from '../pages/ProfilePage/MyProfilePage/MyProfilePage';
import YourProfilePage from '../pages/ProfilePage/YourProfilePage/YourProfilePage';
import ProfileEditPage from '../pages/ProfilePage/ProfileEditPage/ProfileEditPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import NotFound from '../pages/NotFound/NotFound';
import Test from '../components/Test/Test';
import JoinMember from '../pages/JoinPage/JoinMember';
import PostMain from '../pages/PostPage/PostMain/PostMain';
import HomeBlank from '../pages/HomePage/HomePage';
import MyFollowersPage from '../pages/ProfilePage/MyProfilePage/MyFollowersPage';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartSplash />} />
        <Route path="/homefeed" element={<HomeFeed />} />
        <Route path="/home" element={<HomeBlank />} />
        <Route path="/loginmain" element={<LoginMain />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/joinmember" element={<JoinMember />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat/chatroom" element={<ChatRoom />} />
        <Route path="/myprofile" element={<MyProfilePage />} />
        <Route path="/profileedit" element={<ProfileEditPage />} />
        <Route path="/myfollowers" element={<MyFollowersPage />} />
        <Route path="/yourprofile" element={<YourProfilePage />} />
        <Route path="/postupload" element={<PostUploadPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/test" element={<Test />} />
        <Route path="/postmain" element={<PostMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
