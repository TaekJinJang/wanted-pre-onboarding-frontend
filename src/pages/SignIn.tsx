import React from 'react';
import { SignStyle as S } from '../UI/SignStyle';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <>
      <S.SignContainer>
        <S.SignLogoSpan>로그인</S.SignLogoSpan>
        <div>
          <S.SignInputContainer>
            <span>이메일</span>
            <input
              placeholder="example@email.com"
              type="email"
              data-testid="email-input"
            />
          </S.SignInputContainer>
          <S.SignInputContainer>
            <span>비밀번호</span>
            <input
              placeholder="암호를 입력해주세요."
              type="password"
              data-testid="password-input"
            />
          </S.SignInputContainer>
          <S.SignButton data-testid="signin-button"> 로그인 </S.SignButton>
          <S.SignDescContainer>
            <span>계정이 없으신가요?</span>
            <Link to="/signup">회원가입</Link>
          </S.SignDescContainer>
          <S.SignDescContainer>
            <Link to="/">홈으로가기</Link>
          </S.SignDescContainer>
        </div>
      </S.SignContainer>
    </>
  );
}
export default SignIn;
