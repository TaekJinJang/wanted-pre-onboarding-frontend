import AuthContainer from '../containers/AuthContainer';
import * as S from '../styles/Auth.styled';
const SignUp = () => {
    return (
        <S.AuthPageStyled>
            <AuthContainer title={'로그인'} />
        </S.AuthPageStyled>
    );
};

export default SignUp;
