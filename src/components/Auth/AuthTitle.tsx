import {memo} from 'react';
import * as S from '../../styles/Auth.styled';

const AuthTitle = memo(({title}: {title: string}) => {
    return (
        <S.AuthTitleStyled>
            <h1>{title}</h1>
        </S.AuthTitleStyled>
    );
});

export default AuthTitle;
