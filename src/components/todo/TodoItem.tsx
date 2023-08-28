import * as TodoType from '../../types/TodoTypes';
import * as S from '../../styles/Todo.styled';
import {useRef, useState} from 'react';

interface TodoItemProps {
    item: TodoType.Item;
    updateTodo: (id: number, todo: string, isCompleted: boolean) => void;
    deleteTodo: (id: number) => void;
}

const TodoItem = ({item, updateTodo, deleteTodo}: TodoItemProps) => {
    const {id, todo, isCompleted} = item;
    const [isUpdateMode, setIsUpdateMode] = useState<boolean>(false);

    const updateRef = useRef<HTMLInputElement | null>(null);

    const handleDeleteTodo = () => {
        if (window.confirm(`${todo} 항목을 삭제하시겠습니까?`)) deleteTodo(id);
    };
    const handleIsCompletedTodo = () => {
        updateTodo(id, todo, !isCompleted);
    };
    const handleUpdateSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const value = updateRef.current?.value || '';
        Promise.resolve(updateTodo(id, value, isCompleted)).then(() =>
            setIsUpdateMode(!isUpdateMode)
        );
    };
    const handleIsUpdateModeTodo = () => {
        setIsUpdateMode(!isUpdateMode);
    };
    return (
        <li>
            <S.TodoItemStyled>
                {isUpdateMode ? (
                    <>
                        <S.TodoUpdateFormStyled onSubmit={handleUpdateSubmit}>
                            <S.TodoCheckStyled
                                type='checkbox'
                                id={id.toString()}
                                checked={isCompleted}
                                onChange={handleIsCompletedTodo}
                            />
                            <S.TodoUpdateInputStyled
                                id={id.toString()}
                                type='text'
                                data-testid='modify-input'
                                defaultValue={todo}
                                maxLength={30}
                                ref={updateRef}
                            />
                            <S.TodoButtonStyled
                                type='submit'
                                testid='submit-button'
                                className='submit'
                            >
                                완료
                            </S.TodoButtonStyled>
                            <S.TodoButtonStyled
                                type='button'
                                testid='cancel-button'
                                className='cancel'
                                handler={handleIsUpdateModeTodo}
                            >
                                취소
                            </S.TodoButtonStyled>
                        </S.TodoUpdateFormStyled>
                    </>
                ) : (
                    <>
                        <label htmlFor={id.toString()}>
                            <S.TodoCheckStyled
                                type='checkbox'
                                id={id.toString()}
                                checked={isCompleted}
                                onChange={handleIsCompletedTodo}
                            />
                            <span>{todo}</span>
                        </label>
                        <S.TodoButtonStyled
                            type='button'
                            testid='modify-button'
                            className='modify'
                            isDisabled={false}
                            handler={handleIsUpdateModeTodo}
                        >
                            수정
                        </S.TodoButtonStyled>
                        <S.TodoButtonStyled
                            type='button'
                            testid='delete-button'
                            className='delete'
                            isDisabled={false}
                            handler={handleDeleteTodo}
                        >
                            삭제
                        </S.TodoButtonStyled>
                    </>
                )}
            </S.TodoItemStyled>
        </li>
    );
};

export default TodoItem;
