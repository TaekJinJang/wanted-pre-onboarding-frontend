import MetaTag from '../components/SEO/MetaTag';
import {SIGNUP_PROPS} from '../constants/authProps';
import AuthContainer from '../containers/AuthContainer';
import * as S from '../styles/Auth.styled';
const SignUp = () => {
    return (
        <S.AuthPageStyled>
            <MetaTag title='로그아웃' description='TODO 로그아웃 페이지' />
            <AuthContainer {...SIGNUP_PROPS} />
        </S.AuthPageStyled>
    );
};

export default SignUp;
