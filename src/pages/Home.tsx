import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeStyle as S } from '../UI/HomeStyle';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <S.Container>
        <S.TitleDiv>원티드 프리온보딩 인턴십 사전과제</S.TitleDiv>
        <S.ButtonContainer>
          <S.SignButton onClick={() => navigate('/signin')}>
            로그인
          </S.SignButton>
          <S.SignButton onClick={() => navigate('/signup')}>
            회원가입
          </S.SignButton>
        </S.ButtonContainer>
      </S.Container>
    </>
  );
}
export default Home;
