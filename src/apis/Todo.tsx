import { BASE_URL } from './config';

//TODO CREATE
export async function FetchTodoCreate(token: string | null, todo: string) {
  try {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo: `${todo}`,
      }),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse.statusCode;
    }
    return response.json();
  } catch (error) {
    if (error === 400) {
      return {
        error,
        message: '할 일을 입력해주세요.',
      };
    } else {
      return { error, message: '에러가 발생했습니다.' };
    }
  }
}
//TODO LOAD
export async function FetchTodoLoad(token: string | null) {
  try {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse.statusCode;
    }
    const fetchData = await response.json();
    return fetchData;
  } catch (error) {
    return { error, message: '에러가 발생했습니다.' };
  }
}

// TODO DELETE
export async function FetchTodoDelete(token: string | null, todoId: number) {
  try {
    const response = await fetch(`${BASE_URL}/todos/${todoId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error();
    }
    return { message: '' };
  } catch (error) {
    return { error, message: '에러가 발생했습니다.' };
  }
}

// TODO UPDATE
export async function FetchTodoUpdate(
  token: string | null,
  todoId: number,
  editTodo: string,
  isCompleted: boolean
) {
  try {
    const response = await fetch(`${BASE_URL}/todos/${todoId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        todo: editTodo,
        isCompleted: isCompleted,
      }),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse.statusCode;
    }
    const fetchedData = await response.json();
    return fetchedData;
  } catch (error) {
    return { error, message: '에러가 발생했습니다.' };
  }
}
