import AuthFooter from '../components/Auth/AuthFooter';
import AuthInput from '../components/Auth/AuthInput';
import AuthTitle from '../components/Auth/AuthTitle';
import * as S from '../styles/Auth.styled';

const AuthContainer = ({title}: {title: string}) => {
    return (
        <>
            <AuthTitle title={title} />
            <AuthInput />
            <S.AuthButton type={'submit'} testid='button-input'>
                로그인
            </S.AuthButton>
            <AuthFooter />
        </>
    );
};

export default AuthContainer;
