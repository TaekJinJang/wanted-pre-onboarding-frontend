import styled from 'styled-components';

export const TodoStyle = {
    TodoContainer: styled.div`
        display: flex;
        padding: 35.65px 480px 55.65px 480px;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    `,
    TodoHeader: styled.div`
        display: flex;
        max-width: 480px;
        padding: 13px 20px 14px 20px;
        justify-content: center;
        align-items: center;
        gap: 271.72px;
        border-bottom: 1px solid #e1e2e3;
        background: #fff;
    `,
    TodoLogo: styled.span`
        color: #36f;
        font-family: SF Pro Text;
        font-size: 28px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
    `,
    TodoLogOut: styled.button`
        display: flex;
        padding: 10px 9.28px 11px 10px;
        align-items: flex-start;
        color: #808080;
        border: none;
        background-color: white;
        font-family: Apple SD Gothic Neo;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    `,
    TodoInputContainer: styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 10px;
        width: 500px;

        input {
            width: 300px;
            font-size: 20px;
            font-weight: 600;
            text-align: center;
            line-height: 1.5;
            border-bottom: 1px solid gray;
        }
        button {
            margin: 10px 0px;
            width: 50px;
            height: 35px;
            border: 1px solid gray;
            border-radius: 10px;
            &:disabled {
                background-color: #b8b8b8;
                cursor: not-allowed;
                transition: 0.1s ease-in-out;
            }

            transition: 0.1s ease-in-out;
        }
    `,
    TodoListContainer: styled.div``,

    TodoInputSpanContainer: styled.label`
        width: 300px;
        flex: 1;
        overflow: auto;
    `,
    TodoCheckBox: styled.input`
        margin-right: 10px;
    `,
    TodoEditInput: styled.input`
        padding-left: 5px;
        font-size: 16px;
        border: 1px solid gray;
        border-radius: 5px;
    `,
    TodoButtonContainer: styled.div`
        margin-left: 20px;
        button {
            margin: 5px;
            font-size: 20px;
            color: gray;
            &:hover {
                color: black;
            }
        }
    `,
};
