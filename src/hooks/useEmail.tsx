import React, { useState, useCallback } from 'react';

export default function useEmail() {
  const [email, setEmail] = useState<string>('');
  const [isConfirmEmail, setIsConfirmEmail] = useState<boolean>(false);

  const handleEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    checkEmail(e.currentTarget.value);
  }, []);

  const checkEmail = (email: string) => {
    const emailRegex = /[@]/g;
    if (emailRegex.test(email)) {
      setIsConfirmEmail(true);
    } else setIsConfirmEmail(false);
  };

  return { email, isConfirmEmail, handleEmail };
}
