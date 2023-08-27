import {postSignIn, postSignUp} from '../apis/Auth';
import ROUTES from '../constants/routes';
import * as M from '../constants/message';

export const SIGNIN_PROPS = {
    api: postSignIn,
    title: '로그인',
    navigation: ROUTES.TODO,
    buttonType: '로그인',
    testid: 'signin-button',
    footerType: '회원가입',
    footerText: '아직 회원이 아니신가요?',
    link: ROUTES.SIGNUP,
    successMsg: M.SIGNIN_SUCCESS,
    errorMsg: M.SIGNIN_FAILED,
};

export const SIGNUP_PROPS = {
    api: postSignUp,
    title: '회원가입',
    navigation: ROUTES.SIGNIN,
    buttonType: '가입하기',
    testid: 'signup-button',
    footerType: '로그인',
    footerText: '이미 가입하셨나요?',
    link: ROUTES.SIGNIN,
    successMsg: M.SIGNUP_SUCCESS,
    errorMsg: M.SIGNUP_FAILED,
};
