import styled from 'styled-components';

export const SignStyle = {
  SignContainer: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
  `,
  SignLogoSpan: styled.span`
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 800;
  `,
  SignInputContainer: styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
    width: 280px;

    span {
      width: 60px;
      font-size: 15px;
      text-align: center;
    }

    input {
      width: 180px;
      font-size: 15px;
      font-weight: 600;
      line-height: 1.5;
      border-bottom: 1px solid gray;
    }
  `,
  SignButton: styled.button`
    margin: 20px 0;
    width: 100%;
    height: 35px;
    border: 1px solid gray;
    border-radius: 10px;
    :disabled {
      background-color: #b8b8b8;
      cursor: not-allowed;
      transition: 0.1s ease-in-out;
    }
    transition: 0.1s ease-in-out;
  `,
  SignDescContainer: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
    font-size: 13px;
    gap: 5px;
    span {
      color: gray;
    }
    a {
      :hover {
        text-decoration: underline;
      }
    }
  `,
};
