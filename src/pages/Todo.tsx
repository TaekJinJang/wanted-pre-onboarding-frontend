import MetaTag from '../components/SEO/MetaTag';
import TodoContainer from '../containers/TodoContainer';
import {TodoProvider} from '../contexts/TodoContext';

const Todo = () => {
    return (
        <>
            <MetaTag title='TODO' description='TODO 페이지' />
            <TodoProvider>
                <TodoContainer />;
            </TodoProvider>
        </>
    );
};

export default Todo;
