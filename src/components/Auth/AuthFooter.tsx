import {Link} from 'react-router-dom';
import * as S from '../../styles/Auth.styled';
import {AuthFooterProps} from '../../types/AuthTypes';

const AuthFooter = ({text, type, route}: AuthFooterProps) => {
    return (
        <S.AuthFooterStyled>
            <span>{text}</span>
            <Link to={route} className='link'>
                {type}
            </Link>
        </S.AuthFooterStyled>
    );
};

export default AuthFooter;
