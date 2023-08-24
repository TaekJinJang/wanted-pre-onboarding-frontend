import {useEffect} from 'react';
import TodoCreateContainer from '../../containers/TodoCreateContainer';
import TodoListContainer from '../../containers/TodoListContainer';
import useTodoList from '../../hooks/useTodo';

function TodoIndex() {
    const {getTodos} = useTodoList();

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div>
            <TodoCreateContainer />
            <TodoListContainer />
        </div>
    );
}

export default TodoIndex;
