import { useState } from 'react';

export default function useTodoEdit() {
  const [editTodo, setEditTodo] = useState<string>('');

  function handleTodoEdit(event: React.ChangeEvent<HTMLInputElement>) {
    setEditTodo(event.currentTarget.value);
  }
  return { editTodo, setEditTodo, handleTodoEdit };
}
