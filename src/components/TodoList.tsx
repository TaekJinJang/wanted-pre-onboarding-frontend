import React from 'react';
import { todoListStyle as S } from '../UI/TodoStyle';
import { RxUpdate, RxCrossCircled } from 'react-icons/rx';
import { TodoListPropsType, TodoListType } from '../types/todo.type';

export function TodoList({ todoList, onDeleteTodo }: TodoListPropsType) {
  const token = localStorage.getItem('loginToken');
  console.log(todoList);
  return (
    <>
      <ul>
        <li>
          {todoList.map((todo: TodoListType) => (
            <S.TodoContainer key={todo.id}>
              <S.TodoInputSpanContainer>
                <input type="checkbox" />
                <span>{todo.todo}</span>
              </S.TodoInputSpanContainer>
              <S.TodoButtonContainer>
                <button type="button" title="수정" data-testid="modify-input">
                  <RxUpdate />
                </button>
                <button
                  type="button"
                  title="삭제"
                  data-testid="delete-button"
                  onClick={() => onDeleteTodo(token, todo.id)}
                >
                  <RxCrossCircled />
                </button>
              </S.TodoButtonContainer>
            </S.TodoContainer>
          ))}
        </li>
      </ul>
    </>
  );
}
