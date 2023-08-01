import React, { useState } from 'react';

export default function useTodoCreate() {
  const [todo, setTodo] = useState('');

  function handleTodoAdd(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo(event.currentTarget.value);
  }

  return { todo, setTodo, handleTodoAdd };
}
