import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, handleToggle, handleRemove }) => {
 return (
  <div className="todo-list">
   {todos.map((todo) => (
    <TodoListItem
     key={todo.id}
     todo={todo}
     handleToggle={handleToggle}
     handleRemove={handleRemove}
    />
   ))}
  </div>
 );
};

export default TodoList;
