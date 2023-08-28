import TodoCreate from '../components/Todo/TodoCreate';
import * as S from '../styles/Todo.styled';

const TodoContainer = () => {
    return (
        <S.TodoContainerStyled>
            <TodoCreate />
        </S.TodoContainerStyled>
    );
};

export default TodoContainer;
