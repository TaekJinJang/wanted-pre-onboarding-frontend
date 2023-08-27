import AuthContainer from '../containers/AuthContainer';
import * as S from '../styles/Auth.styled';

const SignIn = () => {
    return (
        <S.AuthContainer>
            <AuthContainer title={'로그인'} />
        </S.AuthContainer>
    );
};

export default SignIn;