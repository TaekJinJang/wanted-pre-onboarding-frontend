import {createTodo} from '../apis/Todo';
import TodoCreate from '../components/Todo/TodoCreate';

import * as S from '../styles/Todo.styled';

const TodoContainer = () => {
    const createTodoa = async (todo: string) => {
        const res = await createTodo({todo});
        return res;
    };

    return (
        <S.TodoContainerStyled>
            <TodoCreate createTodo={createTodoa} />
        </S.TodoContainerStyled>
    );
};

export default TodoContainer;
