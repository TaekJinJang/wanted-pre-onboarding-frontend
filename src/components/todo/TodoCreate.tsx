import {useRef} from 'react';
import * as S from '../../styles/Todo.styled';
import Button from '../common/Button';

const TodoCreate = ({createTodo}) => {
    // useState를 사용하지않고 Ref를 사용하는 이유는 ?
    // Ref는 값이 변해도 렌더링이 되지 않음.
    // 추가버튼을 클릭했을 때 렌더링이 되며 inputRef의 값이 API로 전달
    const inputRef = useRef<HTMLInputElement | null>(null);
    const handleFormSubmit = (e: React.FormEvent) => {
        const value = inputRef.current?.value || null;
        if (value) {
            createTodo(value);
        }
    };
    return (
        <S.TodoCreateFormStyled onSubmit={handleFormSubmit}>
            {' '}
            <input
                placeholder='할 일을 입력해주세요... '
                data-testid='new-todo-input'
                type='text'
                ref={inputRef}
                maxLength={30}
            />
            <Button type='submit' testid='new-todo-add-button'>
                추가
            </Button>
        </S.TodoCreateFormStyled>
    );
};

export default TodoCreate;
