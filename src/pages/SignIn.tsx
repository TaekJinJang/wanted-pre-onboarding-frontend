import React from 'react';

function SignIn() {
  return (
    <>
      <div>원티드 프리온보딩 인턴십 사전과제</div>
      <input
        placeholder="example@email.com"
        type="email"
        data-testid="email-input"
      />
      <input
        placeholder="암호를 입력해주세요."
        type="password"
        data-testid="password-input"
      />
      <button data-testid="signin-button" />
    </>
  );
}
export default SignIn;
