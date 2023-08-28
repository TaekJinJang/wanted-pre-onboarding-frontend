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
