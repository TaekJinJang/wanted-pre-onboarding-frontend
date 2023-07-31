import React, { useEffect } from 'react';
import { SignStyle as S } from '../UI/SignStyle';
import { Link, useNavigate, NavigateFunction } from 'react-router-dom';
import useEmail from '../hooks/useEmail';
import usePassword from '../hooks/usePassword';
import { FetchSignIn } from '../apis/Auth';

function SignIn() {
  //hooks 디렉토리 참조
  const { email, isConfirmEmail, handleEmail } = useEmail();
  const { password, isConfirmPassword, handlePassword } = usePassword();
  const navigate: NavigateFunction = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem('loginToken')) {
  //     navigate('/todo');
  //   }
  // });
  async function onClickSignIn() {
    const { message } = await FetchSignIn(email, password);
    alert(message);
  }

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
              value={email}
              onChange={handleEmail}
            />
          </S.SignInputContainer>
          <S.SignInputContainer>
            <span>비밀번호</span>
            <input
              placeholder="암호를 입력해주세요."
              type="password"
              data-testid="password-input"
              value={password}
              onChange={handlePassword}
            />
          </S.SignInputContainer>
          <S.SignButton
            data-testid="signin-button"
            type="submit"
            onClick={onClickSignIn}
            disabled={!(isConfirmEmail && isConfirmPassword)}
          >
            {' '}
            로그인하기{' '}
          </S.SignButton>
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
