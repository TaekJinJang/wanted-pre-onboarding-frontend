import * as api from './api';
import API_KEY from '../constants/apiKey';
import {ERROR_MESSAGE} from '../constants/message';

export async function getTodos() {
    try {
        const response = await api.get(API_KEY, '/todos', true);
        return response;
    } catch {
        alert(ERROR_MESSAGE);
    }
}

export async function createTodo(todo: {todo: string}) {
    try {
        const response = await api.post(API_KEY, '/todos', todo, true);
        return response;
    } catch {
        alert(ERROR_MESSAGE);
    }
}

export async function updateTodo(id: number, todo: {todo: string; isCompleted: boolean}) {
    try {
        const response = await api.put(API_KEY, `/todos/${id}`, todo, true);
        return response;
    } catch {
        alert(ERROR_MESSAGE);
    }
}

export async function deleteTodo(id: number) {
    try {
        const response = await api.delete(API_KEY, `/todos/${id}`, true);
        return response;
    } catch {
        alert(ERROR_MESSAGE);
    }
}
