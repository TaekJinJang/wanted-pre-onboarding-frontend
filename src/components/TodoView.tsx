import React, { useState } from 'react';
import { todoListStyle as S } from '../UI/TodoStyle';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { TodoType } from '../types/todo.type';
import useTodoInput from '../hooks/useTodoInput';

export function TodoView({ todo, onDeleteTodo }: TodoType) {
  const token = localStorage.getItem('loginToken');
  const [isEditTodo, setIsEditTodo] = useState(false);

  return (
    <>
      <ul>
        <li>
          <S.TodoContainer>
            <S.TodoInputSpanContainer>
              <input type="checkbox" />
              <span> {todo.todo}</span>
            </S.TodoInputSpanContainer>
            <S.TodoButtonContainer>
              <button
                type="button"
                title="수정"
                data-testid="modify-input"
                onClick={() => setIsEditTodo(true)}
              >
                <AiFillEdit />
              </button>
              <button
                type="button"
                title="삭제"
                data-testid="delete-button"
                onClick={() => onDeleteTodo(token, todo.id)}
              >
                <AiFillDelete />
              </button>
            </S.TodoButtonContainer>
          </S.TodoContainer>
        </li>
      </ul>
    </>
  );
}
