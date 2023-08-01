import React from 'react';
import { todoInputStyle as S } from '../UI/TodoStyle';
import { TodoInputType } from '../types/todo.type';
import useTodoCreate from '../hooks/useTodoCreate';

export function TodoInput({ onCreateTodo }: TodoInputType) {
  const token = localStorage.getItem('loginToken');
  const { todo, setTodo, handleTodoAdd } = useTodoCreate();

  return (
    <>
      <S.TodoInputContainer>
        <input
          placeholder="오늘 할 일을 입력해주세요."
          type="text"
          data-testid="new-todo-input"
          value={todo}
          onChange={handleTodoAdd}
        />
        <button
          data-testid="new-todo-add-button"
          type="button"
          onClick={() => {
            onCreateTodo(token, todo);
            setTodo('');
          }}
        >
          확인
        </button>
      </S.TodoInputContainer>
    </>
  );
}
