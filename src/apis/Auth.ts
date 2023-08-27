import API_KEY from '../constants/apiKey';
import * as Api from './index';

const AUTH_PATH = '/auth';

interface AuthRequestProps {
    email: string;
    password: string;
}

export const postSignIn = async ({email, password}: AuthRequestProps) => {
    const response = await Api.post(API_KEY, `${AUTH_PATH}/signin`, {email, password}, false);
    return response;
};

export const postSignUp = async ({email, password}: AuthRequestProps) => {
    const response = await Api.post(API_KEY, `${AUTH_PATH}/signup`, {email, password}, false);
    return response;
};
