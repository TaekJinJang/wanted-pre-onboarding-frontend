import {useEffect} from 'react';
import Create from '../containers/TodoCreateContainer';
import TodoList from '../containers/TodoListContainer';
import useTodoList from '../hooks/useTodo';

function TodoForm() {
    const {getTodos} = useTodoList();

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div>
            <Create />
            <TodoList />
        </div>
    );
}

export default TodoForm;
