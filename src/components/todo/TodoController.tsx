import {useNavigate} from 'react-router-dom';
import {useTodoDispatch} from '../../contexts/TodoContext';
import {useCallback} from 'react';
import * as TodoAPI from '../../apis/Todo';
import ROUTES from '../../constants/routes';
import {INVALID_TOKEN_MSG} from '../../constants/message';

interface TodoControllerProps {
    setIsLoading: (value: boolean) => void;
}

const TodoController = ({setIsLoading}: TodoControllerProps) => {
    const navigate = useNavigate();
    const todoDispatch = useTodoDispatch();
    const handleErrorResponse = useCallback(() => {
        alert(INVALID_TOKEN_MSG);
        localStorage.removeItem('accessToken');
        navigate(ROUTES.SIGNIN);
    }, [navigate]);

    const getTodo = useCallback(async () => {
        try {
            const res = await TodoAPI.getTodos();
            todoDispatch({type: 'GET', payload: res.data});
        } catch (e: unknown) {
            handleErrorResponse();
        } finally {
            setIsLoading(false);
        }
    }, [handleErrorResponse, setIsLoading, todoDispatch]);

    const createTodo = useCallback(
        async (todo: string) => {
            try {
                const res = await TodoAPI.createTodo({todo: todo});
                todoDispatch({type: 'CREATE', payload: res.data});
            } catch (e: unknown) {
                handleErrorResponse();
            } finally {
                setIsLoading(false);
            }
        },
        [handleErrorResponse, setIsLoading, todoDispatch]
    );

    const updateTodo = useCallback(
        async (id: number, todo: string, isCompleted: boolean) => {
            try {
                const res = await TodoAPI.updateTodo(id, {todo: todo, isCompleted});
                todoDispatch({type: 'UPDATE', payload: res.data});
            } catch (e: unknown) {
                handleErrorResponse();
            } finally {
                setIsLoading(false);
            }
        },
        [handleErrorResponse, setIsLoading, todoDispatch]
    );

    const deleteTodo = useCallback(
        async (id: number) => {
            try {
                await TodoAPI.deleteTodo(id);
                todoDispatch({type: 'DELETE', payload: id});
            } catch (e: unknown) {
                handleErrorResponse();
            } finally {
                setIsLoading(false);
            }
        },
        [handleErrorResponse, setIsLoading, todoDispatch]
    );
    return {getTodo, createTodo, updateTodo, deleteTodo};
};

export default TodoController;
