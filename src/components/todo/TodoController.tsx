import {useNavigate} from 'react-router-dom';
import {useTodoDispatch} from '../../contexts/TodoContext';
import {useCallback} from 'react';
import * as TodoAPI from '../../apis/Todo';
import ROUTES from '../../constants/routes';

const TodoController = () => {
    const navigate = useNavigate();
    const todoDispatch = useTodoDispatch();

    const getTodo = useCallback(async () => {
        try {
            const res = await TodoAPI.getTodos();
            todoDispatch({type: 'GET', payload: res.data});
        } catch (e: unknown) {
            console.error('API호출 실패');
            navigate(ROUTES.SIGNIN);
        }
    }, [todoDispatch]);

    const createTodo = useCallback(
        async (todo: string) => {
            try {
                const res = await TodoAPI.createTodo({todo: todo});
                todoDispatch({type: 'CREATE', payload: res.data});
            } catch (e: unknown) {
                console.error('API호출 실패');
            }
        },
        [todoDispatch]
    );
    return {getTodo, createTodo};
};

export default TodoController;
