import {NavLink, useNavigate} from 'react-router-dom';
import * as S from '../styles/Header.styled';

const Header = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('accessToken');

    const logout = () => {
        localStorage.removeItem('accessToken');
        navigate('/signin');
    };
    return (
        <S.Container>
            <S.Logo to='/todo'>TODO</S.Logo>
            <S.Menu>
                {user ? (
                    <div onClick={logout}>로그아웃</div>
                ) : (
                    <>
                        <NavLink
                            to='/signin'
                            className={({isActive}) => (isActive ? 'active' : '')}
                        >
                            로그인
                        </NavLink>
                        <NavLink
                            to='/signup'
                            className={({isActive}) => (isActive ? 'active' : '')}
                        >
                            회원가입
                        </NavLink>
                    </>
                )}
            </S.Menu>
        </S.Container>
    );
};

export default Header;
