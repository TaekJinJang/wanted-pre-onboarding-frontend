import {useEffect, useState} from 'react';
import TodoController from '../components/Todo/TodoController';
import TodoCreate from '../components/Todo/TodoCreate';

import * as S from '../styles/Todo.styled';
import {useTodoState} from '../contexts/TodoContext';
import TodoItem from '../components/Todo/TodoItem';

const TodoContainer = () => {
    const todoState = useTodoState();
    const [updateId, setUpdateId] = useState<number | null>(null);
    const {getTodo, createTodo, updateTodo, deleteTodo} = TodoController();

    useEffect(() => {
        getTodo();
    }, [getTodo]);

    return (
        <S.TodoContainerStyled>
            <TodoCreate createTodo={createTodo} />
            <S.TodoListStyled>
                {todoState.map(todo => (
                    <TodoItem
                        key={todo.id}
                        item={todo}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                        updateId={updateId}
                        setUpdateId={setUpdateId}
                    />
                ))}
            </S.TodoListStyled>
        </S.TodoContainerStyled>
    );
};

export default TodoContainer;
