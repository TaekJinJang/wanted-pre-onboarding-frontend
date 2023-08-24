import {TodoStyle as S} from '../styles/Todo.styled';
interface Props {
    todo: string;
    handleTodoInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
}
function TodoCreate({todo, handleTodoInput, onSubmit}: Props) {
    return (
        <S.TodoInputContainer>
            <input
                id='todo'
                type='text'
                data-testid='new-todo-input'
                placeholder='할 일을 입력해주세요'
                value={todo}
                onChange={handleTodoInput}
            ></input>
            <button
                type='button'
                data-testid='new-todo-add-button'
                disabled={todo === ''}
                onClick={onSubmit}
            >
                추가
            </button>
        </S.TodoInputContainer>
    );
}

export default TodoCreate;
