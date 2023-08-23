import {TodoStyle as S} from '../styles/Todo.styled';

function Todo() {
    return (
        <>
            <S.TodoContainer>
                <S.TodoHeader>
                    <S.TodoLogo>TODO</S.TodoLogo>
                    <S.TodoLogOut>
                        <div>로그아웃</div>
                    </S.TodoLogOut>
                </S.TodoHeader>
                <S.TodoInputContainer>
                    <input></input>
                    <button>추가</button>
                </S.TodoInputContainer>
            </S.TodoContainer>
            <S.TodoContainer>
                <S.TodoInputSpanContainer>
                    <S.TodoCheckBox type='checkbox' />
                    <span> todo글</span>
                </S.TodoInputSpanContainer>
                <S.TodoButtonContainer>
                    <button type='button' title='수정' data-testid='modify-input'>
                        수정
                    </button>
                    <button type='button' title='삭제' data-testid='delete-button'>
                        삭제
                    </button>
                </S.TodoButtonContainer>
            </S.TodoContainer>
        </>
    );
}

export default Todo;
