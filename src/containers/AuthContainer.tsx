import AuthFooter from '../components/Auth/AuthFooter';
import AuthInput from '../components/Auth/AuthInput';
import AuthTitle from '../components/Auth/AuthTitle';
import * as S from '../styles/Auth.styled';

const AuthContainer = ({title}: {title: string}) => {
    return (
        <>
            <S.AuthContainerStyled>
                <AuthTitle title={title} />
                <AuthInput />
                <S.AuthButtonStyled type={'submit'} testid='button-input'>
                    로그인
                </S.AuthButtonStyled>
                <AuthFooter />
            </S.AuthContainerStyled>
        </>
    );
};

export default AuthContainer;
