import Input from '../common/Input';

const AuthInput = () => {
    return (
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
    );
};

export default AuthInput;
