import React, {useEffect, useState} from 'react';
import {TodoProps} from '../types/Todo.type';
import TodoList from '../components/todo/TodoList';
import {useTodoState} from '../contexts/TodoContext';

function TodoListContainer() {
    const todoState = useTodoState();

    const [todoList, setTodoList] = useState<TodoProps[]>(todoState);

    useEffect(() => {
        setTodoList(todoState);
    }, [todoState]);

    const handleSetTodoList = (id: number, value: string) => {
        setTodoList(prev => prev.map(item => (item.id === id ? {...item, todo: value} : item)));
    };

    return (
        <ul>
            {todoList.map((todoItem: TodoProps) => {
                const {id} = todoItem;
                return (
                    <li key={`todo-${id}`}>
                        <TodoList setTodoList={handleSetTodoList} item={todoItem} />
                    </li>
                );
            })}
        </ul>
    );
}

export default TodoListContainer;
