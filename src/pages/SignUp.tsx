import {SIGNUP_PROPS} from '../constants/authProps';
import AuthContainer from '../containers/AuthContainer';
import * as S from '../styles/Auth.styled';
const SignUp = () => {
    return (
        <S.AuthPageStyled>
            <AuthContainer {...SIGNUP_PROPS} />
        </S.AuthPageStyled>
    );
};

export default SignUp;
