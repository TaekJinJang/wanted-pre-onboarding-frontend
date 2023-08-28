import * as TodoType from '../../types/TodoTypes';
import * as S from '../../styles/Todo.styled';

const TodoItem = ({item}: {item: TodoType.Item}) => {
    const {id, todo, isCompleted} = item;

    return (
        <li>
            <S.TodoItemStyled>
                <label htmlFor={id.toString()}>
                    <input type='checkbox' id={id.toString()} checked={isCompleted} />
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
                >
                    삭제
                </S.TodoButtonStyled>
            </S.TodoItemStyled>
        </li>
    );
};

export default TodoItem;
