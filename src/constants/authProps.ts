import ROUTES from '../constants/routes';

export const SIGNIN_PROPS = {
    title: '로그인',
    navigation: ROUTES.TODO,
    link: ROUTES.SIGNUP,
    buttonType: '로그인',
    footerType: '회원가입',
    testid: 'signin-button',
    footerText: '아직 회원이 아니신가요?',
};

export const SIGNUP_PROPS = {
    title: '회원가입',
    navigation: ROUTES.SIGNIN,
    link: ROUTES.SIGNIN,
    buttonType: '가입하기',
    footerType: '로그인',
    testid: 'signup-button',
    footerText: '이미 가입하셨나요?',
};
