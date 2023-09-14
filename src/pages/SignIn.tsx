import MetaTag from '../components/SEO/MetaTag';
import {SIGNIN_PROPS} from '../constants/authProps';
import AuthContainer from '../containers/AuthContainer';
import * as S from '../styles/Auth.styled';

const SignIn = () => {
    return (
        <S.AuthPageStyled>
            <MetaTag title='로그인' description='TODO 로그인 페이지' />
            <AuthContainer {...SIGNIN_PROPS} />
        </S.AuthPageStyled>
    );
};

export default SignIn;
