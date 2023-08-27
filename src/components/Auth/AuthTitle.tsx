import * as S from '../../styles/Auth.styled';

const AuthTitle = ({title}: {title: string}) => {
    return (
        <S.AuthTitle>
            <h1>{title}</h1>
        </S.AuthTitle>
    );
};

export default AuthTitle;
