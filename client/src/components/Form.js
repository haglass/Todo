import React from "react";

const Form = ({addTodoSubmit,todoValue,setTodoValue}) => {
    const changeTodoValue = (event) => {
        setTodoValue(event.target.value);
      };

    return (
    <form onSubmit={addTodoSubmit} className="flex pt-2">
      <input
      
        type="text"
        placeholder="할일을 입력하세요."
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        value={todoValue}
        onChange={changeTodoValue}
      />
      <input type="submit"
      value="등록"
      className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-400"/>
    </form>
  );
};

export default Form;
