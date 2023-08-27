import {Navigate, createBrowserRouter} from 'react-router-dom';
import App from './App';
import ROUTES from './constants/routes';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';

export const Router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Navigate to={ROUTES.SIGNIN} />,
            },
            {
                path: ROUTES.SIGNIN,
                element: <SignIn />,
            },
            {
                path: ROUTES.SIGNUP,
                element: <SignUp />,
            },
            {
                path: ROUTES.TODO,
                element: <Todo />,
            },
        ],
    },
]);
