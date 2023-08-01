import React, { useState } from 'react';
import { todoListStyle as S } from '../UI/TodoStyle';
import { AiFillCheckCircle } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';
import {
  TodoListPropsType,
  TodoListType,
  UpdateTodoType,
} from '../types/todo.type';
import useTodoInput from '../hooks/useTodoInput';

export function TodoUpdate({
  todo,
  todoId,
  setIsEditTodo,
  onUpdateTodo,
  isCompleted,
}: UpdateTodoType) {
  const token = localStorage.getItem('loginToken');

  return (
    <>
      <ul>
        <li>
          <S.TodoContainer key={todoId}>
            <S.TodoInputSpanContainer>
              <input type="checkbox" />
              <span> {todo}</span>
            </S.TodoInputSpanContainer>
            <S.TodoButtonContainer>
              <button
                type="button"
                title="제출"
                data-testid="submit-button"
                onClick={() => {
                  setIsEditTodo(false);
                  //   onUpdateTodo();
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
        </li>
      </ul>
    </>
  );
}
