import React, {Dispatch, ReactNode, createContext, useContext, useReducer} from 'react';
import * as TodoType from '../types/TodoTypes';

type TodoAction =
    | {type: 'GET'; payload: TodoType.Item[]}
    | {type: 'CREATE'; payload: TodoType.Item}
    | {type: 'DELETE'; payload: number}
    | {type: 'UPDATE'; payload: TodoType.Item};

interface TodoProviderProps {
    children: ReactNode;
}

const initialState: TodoType.Item[] | [] = [];

const TodoStateContext = createContext<TodoType.Item[] | undefined>(undefined);

type TodoDispatch = Dispatch<TodoAction>;
const TodoDispatchContext = createContext<TodoDispatch | undefined>(undefined);

const todoReducer = () => {};

export const TodoProvider = ({children}: TodoProviderProps) => {
    const [todoState, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoDispatchContext.Provider value={dispatch}>
            <TodoStateContext.Provider value={todoState}>{children}</TodoStateContext.Provider>
        </TodoDispatchContext.Provider>
    );
};
