import {NavLink} from 'react-router-dom';
import * as S from '../styles/Header.styled';

const Header = () => {
    return (
        <S.Container>
            <S.Logo to='/todo'>TODO</S.Logo>
            <S.Menu>
                <>
                    <NavLink to='/signup' className={({isActive}) => (isActive ? 'active' : '')}>
                        회원가입
                    </NavLink>
                    <NavLink to='/signin' className={({isActive}) => (isActive ? 'active' : '')}>
                        로그인
                    </NavLink>
                </>
            </S.Menu>
        </S.Container>
    );
};

export default Header;
