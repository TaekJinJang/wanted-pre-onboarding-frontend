import React, { useState } from 'react';

export default function useTodoInput() {
  const [todo, setTodo] = useState('');

  function handleTodoInput(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo(event.currentTarget.value);
  }

  return { todo, setTodo, handleTodoInput };
}
