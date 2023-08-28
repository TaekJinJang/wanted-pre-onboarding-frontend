import TodoContainer from '../containers/TodoContainer';
import {TodoProvider} from '../contexts/TodoContext';

const Todo = () => {
    return (
        <TodoProvider>
            <TodoContainer />;
        </TodoProvider>
    );
};

export default Todo;
