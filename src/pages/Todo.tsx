import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoStyle as S } from '../UI/TodoStyle';
import { TodoList } from '../components/TodoList';
import { TodoInput } from '../components/TodoInput';
import { FetchTodoCreate, FetchTodoLoad, FetchTodoDelete } from '../apis/Todo';
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
    onLoadTodo();
  }
  async function onLoadTodo() {
    const loadTodo = await FetchTodoLoad(token);
    setTodoList(loadTodo);
  }
  async function onDeleteTodo(token: string | null, todoId: number) {
    const { error, message } = await FetchTodoDelete(token, todoId);
    if (error) alert(message);
    onLoadTodo();
  }

  return (
    <>
      <S.TodoContainer>
        <S.TodoLogoSpan>TODO LIST</S.TodoLogoSpan>
        <TodoInput onCreateTodo={onCreateTodo} />
        <TodoList todoList={todoList} onDeleteTodo={onDeleteTodo} />
      </S.TodoContainer>
    </>
  );
}
export default Todo;
