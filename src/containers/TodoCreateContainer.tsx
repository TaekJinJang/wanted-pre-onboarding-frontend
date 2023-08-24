import useTodo from '../hooks/useTodo';
import TodoCreate from '../components/TodoCreate';
import {useInput} from '../hooks/useInput';

function TodoCreateContainer() {
    const [todo, handleTodoInput, setTodo] = useInput('');
    const {createTodo} = useTodo();
    const onSubmit = () => {
        createTodo(todo);
        setTodo('');
    };
    return <TodoCreate todo={todo} handleTodoInput={handleTodoInput} onSubmit={onSubmit} />;
}

export default TodoCreateContainer;
