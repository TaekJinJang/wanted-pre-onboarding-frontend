import {Link} from 'react-router-dom';
import * as S from '../../styles/Auth.styled';
import Input from '../common/Input';
import ROUTES from '../../constants/routes';

const Auth = () => {
    return (
        <S.AuthContainer>
            <S.AuthTitle>
                <h1>회원가입</h1>
            </S.AuthTitle>
            <form>
                <div>
                    <Input
                        label='이메일'
                        id='email'
                        type='text'
                        testid='email-input'
                        placeholder='이메일을 입력해주세요.'
                    />
                    <Input
                        label='비밀번호'
                        id='password'
                        type='password'
                        testid='password-input'
                        placeholder='비밀번호를 입력해주세요.'
                    />
                </div>
            </form>
            <S.AuthButton type={'submit'} testid='button-input'>
                로그인
            </S.AuthButton>
            <S.AuthFooter>
                <span>아직 회원이 아니신가요?</span>
                <Link to={ROUTES.SIGNUP} className='link'>
                    회원가입
                </Link>
            </S.AuthFooter>
        </S.AuthContainer>
    );
};

export default Auth;
