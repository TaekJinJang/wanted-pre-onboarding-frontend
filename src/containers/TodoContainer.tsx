import {useEffect, useState} from 'react';
import TodoController from '../components/todo/TodoController';
import TodoCreate from '../components/todo/TodoCreate';

import * as S from '../styles/Todo.styled';
import {useTodoState} from '../contexts/TodoContext';
import TodoItem from '../components/todo/TodoItem';

const TodoContainer = () => {
    const todoState = useTodoState();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const isNothing = !isLoading && todoState.length === 0;
    const [updateId, setUpdateId] = useState<number | null>(null);
    const {getTodo, createTodo, updateTodo, deleteTodo} = TodoController({setIsLoading});

    useEffect(() => {
        getTodo();
    }, [getTodo]);
    return (
        <S.TodoContainerStyled>
            <TodoCreate createTodo={createTodo} />
            {isLoading && (
                <S.Empty>
                    <p>로딩 중...</p>
                </S.Empty>
            )}
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
