import * as TodoType from '../../types/TodoTypes';
import * as S from '../../styles/Todo.styled';
import {useState} from 'react';

interface TodoItemProps {
    item: TodoType.Item;
    updateTodo: (id: number, todo: string, isCompleted: boolean) => void;
    deleteTodo: (id: number) => void;
}

const TodoItem = ({item, updateTodo, deleteTodo}: TodoItemProps) => {
    const {id, todo, isCompleted} = item;
    const [updateId, setUpdateId] = useState<number | null>(null);
    const isUpdateMode = updateId === id;

    const handleDeleteTodo = () => {
        if (window.confirm(`${todo} 항목을 삭제하시겠습니까?`)) deleteTodo(id);
    };
    const handleIsCompletedTodo = () => {
        updateTodo(id, todo, !isCompleted);
    };
    return (
        <li>
            <S.TodoItemStyled>
                <label htmlFor={id.toString()}>
                    <input
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
            </S.TodoItemStyled>
        </li>
    );
};

export default TodoItem;
