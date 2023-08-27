import {useEffect, useState} from 'react';
import AuthFooter from '../components/Auth/AuthFooter';
import AuthInput from '../components/Auth/AuthInput';
import AuthTitle from '../components/Auth/AuthTitle';
import useAuth from '../hooks/useAuth';
import * as S from '../styles/Auth.styled';
import {AuthPageProps} from '../types/AuthTypes';
import {EMAIL_VALIDATION_MSG, PASSWORD_VALIDATION_MSG} from '../constants/message';

const AuthContainer = ({
    api,
    title,
    navigation,
    buttonType,
    testid,
    footerType,
    footerText,
    link,
    successMsg,
    errorMsg,
}: AuthPageProps) => {
    const {form, onChange, onSubmit, isSignValid} = useAuth({
        api,
        navigation,
        message: {success: successMsg, error: errorMsg},
    });
    const [errorMessage, setErrorMessage] = useState({
        emailError: '',
        passwordError: '',
    });

    useEffect(() => {
        const updatedErrorMessage = {
            ...errorMessage,
            emailError: form.email.isValid ? '' : EMAIL_VALIDATION_MSG,
            passwordError: form.password.isValid ? '' : PASSWORD_VALIDATION_MSG,
        };
        setErrorMessage(updatedErrorMessage);
    }, [form.email.isValid, form.password.isValid]);

    return (
        <>
            <S.AuthContainerStyled>
                <AuthTitle title={title} />
                <form onSubmit={onSubmit}>
                    <AuthInput
                        email={form.email.value}
                        handleEmail={onChange}
                        password={form.password.value}
                        handlePassword={onChange}
                        errorMessage={errorMessage}
                    />
                    <S.AuthButtonStyled type={'submit'} testid={testid} isDisabled={!isSignValid}>
                        {buttonType}
                    </S.AuthButtonStyled>
                </form>
                <AuthFooter text={footerText} type={footerType} route={link} />
            </S.AuthContainerStyled>
        </>
    );
};

export default AuthContainer;
