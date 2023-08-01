import React from 'react';
import { TodoListPropsType, TodoListType } from '../types/todo.type';
import { TodoView } from './TodoView';

export function TodoList({
  todoList,
  onDeleteTodo,
  onUpdateTodo,
}: TodoListPropsType) {
  console.log(todoList);
  return (
    <>
      <ul>
        {todoList.map((todo: TodoListType) => (
          <TodoView
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
      </ul>
    </>
  );
}
