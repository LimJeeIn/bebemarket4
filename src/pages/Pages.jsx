import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';
import SocialLogin from './login/SocialLogin';
import SignUp from './join/SignUp';
import JoinProfile from './join/JoinProfile';
import Search from './search/Search';
import Profile from './profile/Profile';
import ProfileEdit from './profileEdit/ProfileEdit';
import Follower from './follow/Follower';
import Following from './follow/Following';
import UploadProduct from './uploadProduct/UploadProduct';
import PostDetail from './postDetail/PostDetail';
import UploadPost from './uploadPost/UploadPost';
import PostEdit from './postEdit/PostEdit';
import ChatList from './chat/ChatList';
import ChatRoom from './chat/ChatRoom';
import Error from './error/Error';
import Splash from './splash/Splash';
import ProductEdit from './productEdit/ProductEdit';
import { useRecoilValue } from 'recoil';
import { isLoginState } from '../atoms/Atoms';
//만약 from 뒤에 빨간색 에러가뜬다면 vs코드 껏다가 다시켜보기.

function Pages() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2400);
    }
  }, []);

  return loading ? <Splash /> : <MainPages />;
}

function MainPages() {
  const isLogin = useRecoilValue(isLoginState);

  return (
    <Routes>
      <Route path="/" element={isLogin ? <Home /> : <SocialLogin />} />
      <Route path="/sociallogin" element={<SocialLogin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join/signup" element={<SignUp />} />
      <Route path="/join/profile" element={<JoinProfile />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile/:accountname" element={<Profile />} />
      <Route path="/profile/:accountname/edit" element={<ProfileEdit />} />
      <Route path="/profile/:accountname/follower" element={<Follower />} />
      <Route path="/profile/:accountname/following" element={<Following />} />
      <Route path="/product" element={<UploadProduct />} />
      <Route path="/product/edit/:productId" element={<ProductEdit />} />
      <Route path="/post/:postId" element={<PostDetail />} />
      <Route path="/uploadpost" element={<UploadPost />} />
      <Route path="/post/edit/:postId" element={<PostEdit />} />
      <Route path="/socialLogin" element={<SocialLogin />} />
      <Route path="/chat" element={<ChatList />} />
      <Route path="/chat/:id" element={<ChatRoom />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default Pages;
