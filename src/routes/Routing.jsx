import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartSplash from '../pages/SplashPage/StartSplash';
import LoginMain from '../pages/LoginMain/LoginMain';
import LoginPage from '../pages/LoginPage/LoginPage';
import JoinPage from '../pages/JoinPage/JoinPage';
import HomePage from '../pages/HomePage/HomePage';
import ChatPage from '../pages/ChatPage/ChatPage';
import ChatRoom from '../pages/ChatPage/ChatRoom';
import PostUploadPage from '../pages/PostPage/PostUpload/PostUpload';
import PostPage from '../pages/PostPage/PostEdit/PostEdit';
import ProductPage from '../pages/ProductPage/ProductPage';
import MyProfilePage from '../pages/ProfilePage/MyProfilePage/MyProfilePage';
import YourProfilePage from '../pages/ProfilePage/YourProfilePage/YourProfilePage';
import SearchPage from '../pages/SearchPage/SearchPage';
import NotFound from '../pages/NotFound/NotFound';
import Test from '../components/Test/Test';
import JoinMember from '../pages/JoinPage/JoinMember';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartSplash />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/loginmain" element={<LoginMain />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/joinmember" element={<JoinMember />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="/myprofile" element={<MyProfilePage />} />
        <Route path="/yourprofile" element={<YourProfilePage />} />
        <Route path="/postupload" element={<PostUploadPage />} />
        <Route path="/postedit" element={<PostPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
