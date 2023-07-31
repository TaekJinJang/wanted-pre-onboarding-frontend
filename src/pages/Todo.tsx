import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoStyle as S } from '../UI/TodoStyle';
import { TodoList } from '../components/TodoList';

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
      <S.TodoContainer>
        <S.TodoLogoSpan>TODO LIST</S.TodoLogoSpan>
        <S.TodoInputContainer>
          <input placeholder="오늘 할 일을 입력해주세요." />
          <button>확인</button>
        </S.TodoInputContainer>
        <TodoList />
      </S.TodoContainer>
    </>
  );
}
export default Todo;
