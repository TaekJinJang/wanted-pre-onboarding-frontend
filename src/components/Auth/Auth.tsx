import * as S from '../../styles/Auth.styled';
import Input from '../common/Input';

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
        </S.AuthContainer>
    );
};

export default Auth;
