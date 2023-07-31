import React, { useState } from 'react';

export default function usePassword() {
  const [passWord, setPassWord] = useState<string>('');
  const [isConfirmPassWord, setIsConfirmPassWord] = useState<boolean>(false);

  function handlePassWord(event: React.ChangeEvent<HTMLInputElement>) {
    setPassWord(event.currentTarget.value);
    checkPassWord(event.currentTarget.value);
  }

  function checkPassWord(passWord: string) {
    if (passWord.length >= 8) {
      setIsConfirmPassWord(true);
    } else setIsConfirmPassWord(false);
  }

  return { passWord, isConfirmPassWord, handlePassWord };
}
