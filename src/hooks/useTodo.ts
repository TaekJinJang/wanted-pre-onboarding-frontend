import {useTodoDispatch} from '../contexts/TodoContext';
import * as todoApi from '../apis/todoApi';
import {ERROR_MESSAGE} from '../constants/message';

const useTodoList = () => {
    const todoDispatch = useTodoDispatch();

    const getTodos = async () => {
        try {
            const res = await todoApi.getTodos();
            todoDispatch({type: 'GET', payload: res.data});
        } catch {
            alert(ERROR_MESSAGE);
        }
    };

    const createTodo = async (value: string) => {
        try {
            const res = await todoApi.createTodo({todo: value});
            todoDispatch({type: 'CREATE', payload: res.data});
        } catch {
            alert(ERROR_MESSAGE);
        }
    };

    const updateTodo = async (id: number, value: string, isCompleted: boolean) => {
        try {
            const req = {todo: value, isCompleted};
            const res = await todoApi.updateTodo(id, req);
            todoDispatch({type: 'UPDATE', payload: res.data});
        } catch {
            alert(ERROR_MESSAGE);
        }
    };

    const deleteTodo = async (id: number) => {
        try {
            await todoApi.deleteTodo(id);
            todoDispatch({type: 'DELETE', payload: id});
        } catch {
            alert(ERROR_MESSAGE);
        }
    };

    return {
        getTodos,
        createTodo,
        updateTodo,
        deleteTodo,
    };
};

export default useTodoList;
