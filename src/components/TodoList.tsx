import {TodoProps} from '../types/Todo.type';

interface ItemProps {
    setTodoList: (id: number, value: string) => void;
    item: TodoProps;
}

function TodoList({setTodoList, item}: ItemProps) {
    return (
        <div>
            <input checked />
            <div>
                <input type='checkbox' checked={true} />
                <span>{item.todo}</span>
            </div>
            <div>
                <button type='button' data-testid='modify-button'>
                    수정
                </button>
                <button type='button' data-testid='delete-button'>
                    삭제
                </button>
            </div>
        </div>
    );
}

export default TodoList;
