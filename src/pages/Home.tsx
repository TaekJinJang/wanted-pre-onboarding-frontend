import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>원티드 프리온보딩 인턴십 사전과제</div>
      <button onClick={() => navigate('/signin')}>로그인</button>
      <button onClick={() => navigate('/signup')}>회원가입</button>
    </>
  );
}
export default Home;
