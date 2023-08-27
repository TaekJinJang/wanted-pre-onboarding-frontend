import {Link} from 'react-router-dom';
import * as S from '../../styles/Auth.styled';
import {AuthFooterProps} from '../../types/AuthTypes';
import {memo} from 'react';

const AuthFooter = memo(({text, type, route}: AuthFooterProps) => {
    return (
        <S.AuthFooterStyled>
            <span>{text}</span>
            <Link to={route} className='link'>
                {type}
            </Link>
        </S.AuthFooterStyled>
    );
});

export default AuthFooter;
