import API_KEY from '../constants/apiKey';
import * as Api from './index';

const TODO_PATH = '/todos';

export const getTodos = async () => {
    const response = await Api.get(API_KEY, TODO_PATH, true);
    return response;
};
export const createTodo = async (todo: {todo: string}) => {
    const response = await Api.post(API_KEY, TODO_PATH, todo, true);
    return response;
};
