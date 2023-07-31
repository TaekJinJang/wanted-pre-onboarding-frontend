import { NavigateFunction, useNavigate } from 'react-router-dom';
import { BASE_URL } from './config';

export async function FetchSignIn(email: string, password: string) {
  try {
    const response = await fetch(`${BASE_URL}/auth/signin`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    if (!response.ok) {
      throw response.status;
    }
    const responseData = await response.json();
    localStorage.setItem('loginToken', responseData.access_token);
    return { message: '로그인 되었습니다.' };
  } catch (error) {
    if (error === 401) {
      return {
        error,
        message: '이메일 혹은 비밀번호가 틀렸습니다.',
      };
    }
    return {
      error,
      message: '로그인 중 에러가 발생했습니다.',
    };
  }
}

export async function FetchSignUp(email: string, password: string) {
  const navigate: NavigateFunction = useNavigate();
  try {
    const response = await fetch(`${BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    if (!response.ok) {
      throw response.status;
    }
    navigate('/signin');
    return { message: '회원가입이 완료되었습니다.' };
  } catch (error) {
    if (error === 400) {
      return {
        error,
        message: '이미 존재하는 이메일입니다.',
      };
    }
    return {
      error,
      message: '회원가입 중 에러가 발생했습니다.',
    };
  }
}
