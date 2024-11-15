import classNames from "classnames";
import {
 MdCheckBox,
 MdCheckBoxOutlineBlank,
 MdRemoveCircleOutline,
} from "react-icons/md";
import "../styles/todolistitem.scss";

const TodoListItem = ({ todo, handleToggle, handleRemove }) => {
 // 객체 구조 분해 할당
 // props로 전달 받은 todo 객체의 text, checked에 할당
 const { id, text, checked } = todo;

 return (
  <div className="todo-list-item">
   <div
    className={classNames("checkbox", { checked })}
    onClick={() => handleToggle(id)}
   >
    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
    <div className="text">{text}</div>
   </div>
   <div className="remove" onClick={() => handleRemove(id)}>
    <MdRemoveCircleOutline />
   </div>
  </div>
 );
};

export default TodoListItem;
