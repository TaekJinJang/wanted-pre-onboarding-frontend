import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Todo() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('loginToken');
    if (!token) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <div>원티드 프리온보딩 인턴십 사전과제</div>
    </>
  );
}
export default Todo;
