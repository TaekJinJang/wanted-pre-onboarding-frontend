export type TodoListType = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: string;
};

export type TodoListPropsType = {
  todoList: TodoListType[];
  onUpdateTodo: TodoType['onUpdateTodo'];
  onDeleteTodo: TodoType['onDeleteTodo'];
};

export type TodoInputType = {
  onCreateTodo: (token: string | null, todo: string) => void;
};
export type TodoType = {
  todo: TodoListType;
  onUpdateTodo: (
    token: string | null,
    id: number,
    editTodo: string,
    isCompleted: boolean
  ) => Promise<void>;
  onDeleteTodo: (token: string | null, todoId: number) => Promise<void>;
};

export type UpdateTodoType = {
  editTodo: string | undefined;
  isCompleted: boolean;
  todoId: number;
  setIsEditTodo: (state: boolean) => void;
  onUpdateTodo: TodoType['onUpdateTodo'];
};
