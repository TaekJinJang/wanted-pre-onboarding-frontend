import {SIGNIN_PROPS} from '../constants/authProps';
import AuthContainer from '../containers/AuthContainer';
import * as S from '../styles/Auth.styled';

const SignIn = () => {
    return (
        <S.AuthPageStyled>
            <AuthContainer {...SIGNIN_PROPS} />
        </S.AuthPageStyled>
    );
};

export default SignIn;
