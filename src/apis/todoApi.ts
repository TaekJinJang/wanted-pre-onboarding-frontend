import * as api from './api';
import API_KEY from '../constants/apiKey';

export async function getTodos() {
    try {
        const response = await api.get(API_KEY, '/todos', true);
        return response;
    } catch {
        alert('할 일을 가져오는데 실패했습니다.');
    }
}

export async function createTodo(todo: {todo: string}) {
    const response = await api.post(API_KEY, '/todos', todo, true);
    return response;
}

export async function updateTodo(id: number, todo: {todo: string; isCompleted: boolean}) {
    const response = await api.put(API_KEY, `/todos/${id}`, todo, true);
    return response;
}

export async function deleteTodo(id: number) {
    const response = await api.delete(API_KEY, `/todos/${id}`, true);
    return response;
}
