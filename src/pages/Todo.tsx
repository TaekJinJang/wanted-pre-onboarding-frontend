import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoStyle as S } from '../UI/TodoStyle';
import { TodoList } from '../components/TodoList';
import { TodoInput } from '../components/TodoInput';
import { FetchTodoCreate, FetchTodoLoad } from '../apis/Todo';
import { TodoListType } from '../types/todo.type';

function Todo() {
  const navigate = useNavigate();
  const token = localStorage.getItem('loginToken');
  const [todoList, setTodoList] = useState<TodoListType[]>([]);

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  });

  useEffect(() => {
    onLoadTodo();
  }, []);

  async function onCreateTodo(token: string | null, todo: string) {
    const { error, message } = await FetchTodoCreate(token, todo);
    if (error) alert(message);
  }
  async function onLoadTodo() {
    const loadTodo = await FetchTodoLoad(token);
    setTodoList(loadTodo);
  }

  return (
    <>
      <S.TodoContainer>
        <S.TodoLogoSpan>TODO LIST</S.TodoLogoSpan>
        <TodoInput onCreateTodo={onCreateTodo} />
        <TodoList todoList={todoList} />
      </S.TodoContainer>
    </>
  );
}
export default Todo;
