import * as S from '../../styles/Auth.styled';

const AuthErrorMessage = ({message}: {message: string}) => {
    return <S.AuthErrorMessageStyled>{message}</S.AuthErrorMessageStyled>;
};

export default AuthErrorMessage;
