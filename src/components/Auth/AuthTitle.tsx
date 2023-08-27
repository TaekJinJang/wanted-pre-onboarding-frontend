import * as S from '../../styles/Auth.styled';

const AuthTitle = ({title}: {title: string}) => {
    return (
        <S.AuthTitleStyled>
            <h1>{title}</h1>
        </S.AuthTitleStyled>
    );
};

export default AuthTitle;
