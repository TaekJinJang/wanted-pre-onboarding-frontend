import styled from 'styled-components';

//Header 및 Input
export const TodoStyle = {
  TodoContainer: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
  `,
  TodoLogoSpan: styled.span`
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 800;
    border-bottom: 5px double black;
  `,
};

//TODO INPUT
export const todoInputStyle = {
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
};

//TODO LIST
export const todoListStyle = {
  TodoListContainer: styled.div``,
  TodoContainer: styled.div`
    margin-bottom: 5px;
    display: flex;
  `,
  TodoInputSpanContainer: styled.label`
    width: 300px;
    flex: 1;
    input {
      margin-right: 10px;
    }
    overflow: auto;
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
