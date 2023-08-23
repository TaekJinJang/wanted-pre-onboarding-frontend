import React, {Dispatch, ReactNode, createContext, useContext, useReducer} from 'react';
import * as TodoType from '../types/Todo.type';

type TodoAction =
    | {type: 'GET'; payload: TodoType.TodoProps[]}
    | {type: 'CREATE'; payload: TodoType.TodoProps}
    | {type: 'DELETE'; payload: number}
    | {type: 'UPDATE'; payload: TodoType.TodoProps};

interface TodoProviderProps {
    children: ReactNode;
}

const initialState: TodoType.TodoProps[] | [] = [];
const TodoStateContext = createContext<TodoType.TodoProps[] | undefined>(undefined);

type TodosDispatch = Dispatch<TodoAction>;
const TodosDispatchContext = createContext<TodosDispatch | undefined>(undefined);

const todoReducer = (todos: TodoType.TodoProps[], action: TodoAction): TodoType.TodoProps[] => {
    switch (action.type) {
        case 'GET':
            return action.payload;

        case 'CREATE':
            return [...todos, action.payload];

        case 'DELETE':
            return todos.filter(todo => todo.id !== action.payload);

        case 'UPDATE':
            return todos.map(todo =>
                todo.id === action.payload.id
                    ? {...todo, todo: action.payload.todo, isCompleted: action.payload.isCompleted}
                    : todo
            );
        default:
            return todos;
    }
};

export function TodoProvider({children}: TodoProviderProps) {
    const [todoState, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodosDispatchContext.Provider value={dispatch}>
            <TodoStateContext.Provider value={todoState}>{children}</TodoStateContext.Provider>
        </TodosDispatchContext.Provider>
    );
}

export function useTodoState() {
    const state = useContext(TodoStateContext);
    if (!state) throw new Error('TodosProvider not found');
    return state;
}

export function useTodoDispatch() {
    const dispatch = useContext(TodosDispatchContext);
    if (!dispatch) throw new Error('TodosProvider not found');
    return dispatch;
}
