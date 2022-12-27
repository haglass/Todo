import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [todoData, setTodoData] = useState([
    { id: 1, title: "할일 1", completed: false },
    { id: 2, title: "할일 2", completed: false },
    { id: 3, title: "할일 3", completed: false },
    { id: 4, title: "할일 4", completed: false },
  ]);
  const [todoValue, setTodoValue] = useState("");

  const addTodoSubmit = (event) => {
    // 웹브라우저 새로 고침을 하면 안되므로 막아줌.
    event.preventDefault();
    const addTodo = {
      // 아이디 값은 배열.map의 키로 활용예정.유니크 값 만들려고
      id: Date.now(),
      // 입력창으이 내용을 추가
      title: todoValue,
      // 할일이 추가될때 아직 완료한 것은 아니므로 false로
      completed: false,
    };
    //새로운할일을 일단 복사하고 복사된 배열에 추가하여서 업데이트
    // 기존 할일을 디스크럭쳐링 하여서 보사본 만듦
    setTodoData([...todoData, addTodo]);
    // 새로운 할일을 ㅍ추가했으므로 내용입력창의 글자를 최기화
    setTodoValue("");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-300">
      <div className="w-full p-6 m-1 bg-white rounded shadow lg:w-3/4 lg:max-w-5xl">
        <div className="flex justify-between mb-3">
          <h1>할일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData} />

        <Form
          addTodoSubmit={addTodoSubmit}
          todoValue={todoValue}
          setTodoValue={setTodoValue}
        />
      </div>
    </div>
  );
}
