import AuthFooter from '../components/Auth/AuthFooter';
import AuthInput from '../components/Auth/AuthInput';
import AuthTitle from '../components/Auth/AuthTitle';
import * as S from '../styles/Auth.styled';
import {AuthPageProps} from '../types/AuthTypes';

const AuthContainer = ({
    title,
    navigation,
    buttonType,
    testid,
    footerType,
    footerText,
    link,
}: AuthPageProps) => {
    return (
        <>
            <S.AuthContainerStyled>
                <AuthTitle title={title} />
                <AuthInput />
                <S.AuthButtonStyled type={'submit'} testid={testid}>
                    {buttonType}
                </S.AuthButtonStyled>
                <AuthFooter text={footerText} type={footerType} route={link} />
            </S.AuthContainerStyled>
        </>
    );
};

export default AuthContainer;
