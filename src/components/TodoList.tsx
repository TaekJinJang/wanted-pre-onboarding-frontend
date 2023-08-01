import React from 'react';
import { todoListStyle as S } from '../UI/TodoStyle';
import { RxUpdate, RxCrossCircled } from 'react-icons/rx';
import { TodoListPropsType, TodoListType } from '../types/todo.type';

export function TodoList({ todoList }: TodoListPropsType) {
  console.log(todoList);
  return (
    <>
      <ul>
        <li>
          {todoList.map((todo: TodoListType) => (
            <S.TodoContainer>
              <S.TodoInputSpanContainer>
                <input type="checkbox" />
                <span>{todo.todo}</span>
              </S.TodoInputSpanContainer>
              <S.TodoButtonContainer>
                <button type="button" title="수정">
                  <RxUpdate />
                </button>
                <button type="button" title="삭제">
                  <RxCrossCircled />
                </button>
              </S.TodoButtonContainer>
            </S.TodoContainer>
          ))}
        </li>
      </ul>

      {/* <S.TodoListContainer>
        <ul>
          <li>
            <span>gdgd</span>
          </li>
        </ul>
      </S.TodoListContainer> */}
    </>
  );
}
