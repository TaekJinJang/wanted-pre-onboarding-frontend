import {useEffect, useState} from 'react';
import TodoController from '../components/Todo/TodoController';
import TodoCreate from '../components/Todo/TodoCreate';

import * as S from '../styles/Todo.styled';
import {useTodoState} from '../contexts/TodoContext';
import TodoItem from '../components/Todo/TodoItem';

const TodoContainer = () => {
    const todoState = useTodoState();
    const [isLoading, setIsLoading] = useState(false);
    const isNothing = !isLoading && todoState.length === 0;
    const [updateId, setUpdateId] = useState<number | null>(null);
    const {getTodo, createTodo, updateTodo, deleteTodo} = TodoController();

    useEffect(() => {
        getTodo();
    }, [getTodo]);
    useEffect(() => {
        if (todoState.length > 0) setIsLoading(!isLoading);
    }, []);
    return (
        <S.TodoContainerStyled>
            <TodoCreate createTodo={createTodo} />
            {/* {isLoading && (
                <S.Empty>
                    <p>로딩 중...</p>
                </S.Empty>
            )} */}
            {isNothing && (
                <S.Empty>
                    <img src={'/assets/images/coffeebreak.png'} alt='breaktime' width='150px' />
                    <p>아직 할 일이 없습니다!</p>
                </S.Empty>
            )}
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
