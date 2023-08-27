import * as S from '../../styles/Common.styled';
import {ChangeEvent} from 'react';

export interface InputProps {
    label: string;
    id: string;
    type: string;
    testid: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({label, testid, id, type, placeholder, value, onChange}: InputProps) => {
    return (
        <S.CommonInput>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                data-testid={testid}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </S.CommonInput>
    );
};

export default Input;
