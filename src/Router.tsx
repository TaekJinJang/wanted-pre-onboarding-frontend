import {Navigate, createBrowserRouter} from 'react-router-dom';
import App from './App';
import ROUTES from './constants/routes';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';
import {redirectSignin, redirectTodo} from './utils/redirect';

export const Router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Navigate to={ROUTES.TODO} replace={true} />,
                loader: redirectTodo,
            },
            {
                path: ROUTES.SIGNIN,
                element: <SignIn />,
                loader: redirectTodo,
            },
            {
                path: ROUTES.SIGNUP,
                element: <SignUp />,
                loader: redirectTodo,
            },
            {
                path: ROUTES.TODO,
                element: <Todo />,
                loader: redirectSignin,
            },
        ],
    },
]);
