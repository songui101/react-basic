import { useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import "./styles/todolistitem.scss";
import TodoList from "./components/TodoList";

const initState = [
 {
  id: 1,
  text: "리액트 기초 공부하기",
  checked: true,
 },
 {
  id: 2,
  text: "SCSS 공부하기",
  checked: true,
 },
 {
  id: 3,
  text: "할일 목록 관리 앱 만들기",
  checked: false,
 },
];

function App() {
 const [todos, setTodos] = useState(initState);

 // 1. DOM 요소에 직접 접근할 때 (input요소, 포커스, 스크롤 조작 등 유용)
 // 2. 값 저장소: 컴포넌트가 다시 렌더링 되더라도 유지 되어야 하는 값을 저장하는 데 사용
 // 그러나 이 값을 변경해도 컴포넌트가 다시 렌더링 되지 않는다.
 // 따라서 useRef()는 특정 값이나 DOM 요소를 참조해야 하지만
 // 그 값의 변경이 컴포넌트의 리랜더링에 영향을 미치지 않도록 하고 싶을 때 유용한 도구
 // useRef(initValue)에서 initValue는 current 속성의 초기 값으로 설정된다.
 // current 속성 값은 변경할 수 있으며, 변경해도 컴포넌트가 리렌더링 되지 않는다.
 // 주로 null 초기화: DOM 요소를 참조하려고 할 때는 초기 값을 null로 설정하는 것이 일반적이며, 컴포넌트가 렌더링 된 이후에 접근하게 된다.
 const nextId = useRef(4);

 // todos 배열에 새 객체 추가
 const handleInsert = (text) => {
  const todo = {
   id: nextId.current,
   text,
   checked: false,
  };
  setTodos(todos.concat(todo));
  nextId.current += 1;
 };

 const handleToggle = () => {
  console.log("체크완료");
 };

 const handleRemove = () => {
  console.log("삭제완료");
 };

 return (
  <>
   <h1>할일 관리 앱</h1>
   <TodoInsert onInsert={handleInsert} />
   <TodoList
    todos={todos}
    handleToggle={handleToggle}
    handleRemove={handleRemove}
   />
  </>
 );
}

export default App;
