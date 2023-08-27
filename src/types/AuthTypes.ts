import {AxiosResponse} from 'axios';

export type AuthAPI = ({email, password}: AuthRequestProps) => Promise<AxiosResponse>;

export interface AuthPageProps {
    // api: AuthAPI;
    title: string;
    navigation: string;
    link: string;
    buttonType: string;
    footerType: string;
    testid: string;
    footerText: string;
    // successMsg: string;
    // errorMsg: string;
}

export interface AuthFooterProps {
    text: string;
    type: string;
    route: string;
}
export interface AuthRequestProps {
    email: string;
    password: string;
}
