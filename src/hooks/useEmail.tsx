import React, { useState } from 'react';

export default function useEmail() {
  const [email, setEmail] = useState<string>('');
  const [isConfirmEmail, setIsConfirmEmail] = useState<boolean>(false);

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
    checkEmail(e.currentTarget.value);
  }

  function checkEmail(email: string) {
    const emailRegex = /[@]/g;
    if (emailRegex.test(email)) {
      setIsConfirmEmail(true);
    } else setIsConfirmEmail(false);
  }

  return { email, isConfirmEmail, handleEmail };
}
