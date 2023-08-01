import React from 'react';
import { SignStyle as S } from '../UI/SignStyle';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import useEmail from '../hooks/useEmail';
import usePassword from '../hooks/usePassword';
import { FetchSignUp } from '../apis/Auth';

function SignUp() {
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
    const { message } = await FetchSignUp(email, password);
    alert(message);
  }

  return (
    <>
      <S.SignContainer>
        <S.SignLogoSpan>회원가입</S.SignLogoSpan>
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
            data-testid="signup-button"
            type="submit"
            onClick={onClickSignIn}
            disabled={!(isConfirmEmail && isConfirmPassword)}
          >
            {' '}
            회원 가입하기{' '}
          </S.SignButton>
          <S.SignDescContainer>
            <span>계정이 있으신가요?</span>
            <Link to="/signin">로그인</Link>
          </S.SignDescContainer>
          <S.SignDescContainer>
            <Link to="/">홈으로가기</Link>
          </S.SignDescContainer>
        </div>
      </S.SignContainer>
    </>
  );
}
export default SignUp;
