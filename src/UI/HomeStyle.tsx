import styled from 'styled-components';

export const HomeStyle = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  `,

  TitleDiv: styled.div`
    font-size: 45px;
    font-weight: 800;
  `,

  ButtonContainer: styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 50px;
    width: 150px;
  `,

  SignButton: styled.button`
    &:hover {
      background-color: black;
      transition: 0.7s;
    }

    background-color: blueviolet;
    margin: 0 5px;
    color: white;
    width: 80px;
    height: 50px;
  `,
};
