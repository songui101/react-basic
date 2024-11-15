import { useState } from "react";
import { MdAdd } from "react-icons/md";
import "../styles/todoinsert.scss";

const TodoInsert = ({ onInsert }) => {
 //  const [값, 값을 변경하는 함수] = useState(초기값);
 const [value, setValue] = useState("");

 const handleChange = (e) => {
  setValue(e.target.value);

  console.log(value);
 };

 const handleSubmit = (e) => {
  onInsert(value);
  setValue("");
  e.preventDefault();
 };

 return (
  <form className="todo-insert" onSubmit={handleSubmit}>
   <input
    type="text"
    placeholder="할 일을 입력하세요"
    value={value}
    onChange={handleChange}
   />

   <button type="submit">
    <MdAdd />
   </button>
  </form>
 );
};

export default TodoInsert;
