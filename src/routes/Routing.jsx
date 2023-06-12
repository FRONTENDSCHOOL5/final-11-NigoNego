import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashPage from '../pages/SplashPage/SplashPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import JoinPage from '../pages/JoinPage/JoinPage'
import HomePage from '../pages/HomePage/HomePage'
import ChatPage from '../pages/ChatPage/ChatPage'
import PostUploadPage from "../pages/PostPage/PostUpload/PostUpload";
import PostEditPage from "../pages/PostPage/PostEdit/PostEdit";
import ProductPage from '../pages/ProductPage/ProductPage'
import MyProfilePage from '../pages/ProfilePage/MyProfilePage/MyProfilePage'
import YourProfilePage from '../pages/ProfilePage/YourProfilePage/YourProfilePage'
import SearchPage from '../pages/SearchPage/SearchPage'
import NotFound from '../pages/NotFound/NotFound'



function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/join" element={<JoinPage />}/>
        <Route path="/chat" element={<ChatPage />}/>
        <Route path="/myprofile" element={<MyProfilePage />}/>
        <Route path="/yourprofile" element={<YourProfilePage />}/>
        <Route path="/postupload" element={<PostUploadPage />}/>
        <Route path="/postedit" element={<PostEditPage />}/>
        <Route path="/product" element={<ProductPage />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/404" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;