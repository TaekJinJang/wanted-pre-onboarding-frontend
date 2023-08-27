import styled from 'styled-components';

export const CommonInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
        color: var(--dark-gray);
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 6px;
    }

    input {
        padding: 14px 11px 13px 11px;
        border-radius: 5px;
        border: 1px solid var(--light-gray);
        background: var(--white);
    }

    input::placeholder {
        color: var(--dark-gray);
        font-size: 16px;
        font-weight: 400;
    }
`;
