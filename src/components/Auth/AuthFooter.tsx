import {Link} from 'react-router-dom';
import * as S from '../../styles/Auth.styled';

import ROUTES from '../../constants/routes';

const AuthFooter = () => {
    return (
        <S.AuthFooterStyled>
            <span>아직 회원이 아니신가요?</span>
            <Link to={ROUTES.SIGNUP} className='link'>
                회원가입
            </Link>
        </S.AuthFooterStyled>
    );
};

export default AuthFooter;
