import React, { useState, useEffect } from 'react';
import { todoListStyle as S } from '../UI/TodoStyle';
import { AiFillCheckCircle } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';
import { UpdateTodoType } from '../types/todo.type';
import useTodoEdit from '../hooks/useTodoEdit';
import useTodoInput from '../hooks/useTodoInput';

export function TodoUpdate({
  editTodo,
  todoId,
  setIsEditTodo,
  onUpdateTodo,
  isCompleted,
}: UpdateTodoType) {
  const token = localStorage.getItem('loginToken');
  const { todo, setTodo, handleTodoInput } = useTodoInput();
  useEffect(() => {
    editTodo && setTodo(editTodo);
  }, []);

  return (
    <>
      <S.TodoContainer key={todoId}>
        <S.TodoInputSpanContainer>
          <input type="checkbox" checked={isCompleted} readOnly />
          <input
            type="text"
            value={todo}
            onChange={handleTodoInput}
            data-testid="modify-input"
          />
        </S.TodoInputSpanContainer>
        <S.TodoButtonContainer>
          <button
            type="button"
            title="제출"
            data-testid="submit-button"
            // onChange={() => handleTodoInput}
            onClick={() => {
              setIsEditTodo(false);
              onUpdateTodo(token, todoId, todo, isCompleted);
            }}
          >
            <AiFillCheckCircle />
          </button>
          <button
            type="button"
            title="취소"
            data-testid="cancel-button"
            onClick={() => setIsEditTodo(false)}
          >
            <GiCancel />
          </button>
        </S.TodoButtonContainer>
      </S.TodoContainer>
    </>
  );
}