import {useEffect} from 'react';
import TodoController from '../components/Todo/TodoController';
import TodoCreate from '../components/Todo/TodoCreate';

import * as S from '../styles/Todo.styled';
import {useTodoState} from '../contexts/TodoContext';

const TodoContainer = () => {
    const todoState = useTodoState();
    console.info(todoState);
    const {getTodo, createTodo} = TodoController();

    useEffect(() => {
        getTodo();
    }, [getTodo]);

    return (
        <S.TodoContainerStyled>
            <TodoCreate createTodo={createTodo} />
        </S.TodoContainerStyled>
    );
};

export default TodoContainer;
