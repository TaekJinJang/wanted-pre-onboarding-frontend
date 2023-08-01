import React, { useState } from 'react';
import { todoListStyle as S } from '../UI/TodoStyle';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { TodoListPropsType, TodoListType } from '../types/todo.type';
import useTodoInput from '../hooks/useTodoInput';
import { TodoView } from './TodoView';

export function TodoList({ todoList, onDeleteTodo }: TodoListPropsType) {
  const token = localStorage.getItem('loginToken');
  const [isEditTodo, setIsEditTodo] = useState(false);

  console.log(todoList);
  return (
    <>
      <ul>
        <li>
          {todoList.map((todo: TodoListType) => (
            <TodoView key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
          ))}
        </li>
      </ul>
    </>
  );
}
