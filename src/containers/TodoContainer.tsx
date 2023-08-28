import {useEffect} from 'react';
import TodoController from '../components/Todo/TodoController';
import TodoCreate from '../components/Todo/TodoCreate';

import * as S from '../styles/Todo.styled';
import {useTodoState} from '../contexts/TodoContext';
import TodoItem from '../components/Todo/TodoItem';

const TodoContainer = () => {
    const todoState = useTodoState();
    console.info(todoState);
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
                    />
                ))}
            </S.TodoListStyled>
        </S.TodoContainerStyled>
    );
};

export default TodoContainer;
