import React, { useState } from 'react';

export default function usePassword() {
  const [password, setPassword] = useState<string>('');
  const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(false);

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value);
    checkPassword(event.currentTarget.value);
  }

  function checkPassword(password: string) {
    if (password.length >= 8) {
      setIsConfirmPassword(true);
    } else setIsConfirmPassword(false);
  }

  return { password, isConfirmPassword, handlePassword };
}
