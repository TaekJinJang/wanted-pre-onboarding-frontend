import React, { useState, useEffect } from 'react';
import { todoListStyle as S } from '../UI/TodoStyle';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { TodoType } from '../types/todo.type';
import { TodoUpdate } from './TodoUpdate';

export function TodoView({ todo, onDeleteTodo, onUpdateTodo }: TodoType) {
  const token = localStorage.getItem('loginToken');
  const [isEditTodo, setIsEditTodo] = useState(false);
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  const [editTodo, setEditTodo] = useState(todo.todo);

  useEffect(() => {
    setEditTodo(todo.todo);
  }, [todo]);

  return (
    <>
      <li>
        {isEditTodo ? (
          <TodoUpdate
            editTodo={editTodo}
            todoId={todo.id}
            setIsEditTodo={setIsEditTodo}
            onUpdateTodo={onUpdateTodo}
            isCompleted={isChecked}
          />
        ) : (
          <S.TodoContainer>
            <S.TodoInputSpanContainer>
              <S.TodoCheckBox
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                onClick={() =>
                  onUpdateTodo(token, todo.id, todo.todo, !isChecked)
                }
              />
              <span> {editTodo}</span>
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
        )}
      </li>
    </>
  );
}
