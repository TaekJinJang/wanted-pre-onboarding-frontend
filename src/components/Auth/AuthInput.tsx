import {AuthInputProps} from '../../types/AuthTypes';
import Input from '../common/Input';

const AuthInput = ({
    email,
    handleEmail,
    password,
    handlePassword,
    errorMessage,
}: AuthInputProps) => {
    console.info(errorMessage);
    return (
        <div>
            <Input
                label='이메일'
                id='email'
                type='text'
                testid='email-input'
                placeholder='이메일을 입력해주세요.'
                value={email}
                onChange={handleEmail}
            />

            <Input
                label='비밀번호'
                id='password'
                type='password'
                testid='password-input'
                placeholder='비밀번호를 입력해주세요.'
                value={password}
                onChange={handlePassword}
            />
        </div>
    );
};

export default AuthInput;
