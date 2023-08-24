import {TodoStyle as S} from '../styles/Todo.styled';
import TodoIndex from '../components/todo/index';
import {TodoProvider} from '../contexts/TodoContext';

function Todo() {
    return (
        <>
            <S.TodoHeader>
                <S.TodoLogo>TODO</S.TodoLogo>
                <S.TodoLogOut>
                    <div>로그아웃</div>
                </S.TodoLogOut>
            </S.TodoHeader>
            <S.TodoContainer>
                <TodoProvider>
                    <TodoIndex />
                </TodoProvider>
            </S.TodoContainer>
        </>
    );
}

export default Todo;
