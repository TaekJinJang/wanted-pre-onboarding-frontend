import * as TodoType from '../../types/TodoTypes';
import * as S from '../../styles/Todo.styled';

const TodoItem = ({item}: {item: TodoType.Item}) => {
    const {id, todo, isCompleted} = item;

    return (
        <li>
            <S.TodoItemStyled>
                <span>{id}</span>
            </S.TodoItemStyled>
        </li>
    );
};

export default TodoItem;
