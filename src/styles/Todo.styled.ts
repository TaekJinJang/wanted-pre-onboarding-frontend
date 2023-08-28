import styled from 'styled-components';

export const TodoContainerStyled = styled.div`
    width: 480px;
    margin: 20px auto;
`;
export const TodoCreateFormStyled = styled.form`
    display: flex;

    input {
        font-size: 20px;
        font-weight: 500;
        border: 2px solid #36f;
        border-radius: 5px;
        padding: 8px;
        margin-right: 10px;
        flex: 1;
    }

    button {
        font-size: 20px;
        font-weight: 600;
        width: 70px;
        cursor: pointer;
        color: #ffffff;
        border: 1px solid #36f;
        border-radius: 5px;
        background-color: #36f;
    }
`;

export const TodoItemStyled = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        padding: 4px;
        margin: 0 10px;
        text-decoration: ${props => (props.className === 'true' ? 'line-through' : 'none')};
    }
`;

export const TodoListStyled = styled.ul`
    font-size: 20px;
    padding: 0;
    list-style: none;

    label {
        display: flex;
        align-items: center;
        flex: 1;
        cursor: pointer;
    }

    button {
        font-size: 16px;
        font-weight: 600;
        width: 50px;
        padding: 4px 8px;
        margin: 0 4px;
        cursor: pointer;
        border-radius: 100px;
        border: 1px solid;
    }
`;
