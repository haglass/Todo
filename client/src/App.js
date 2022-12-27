import React, { Component } from "react";

export default class App extends Component {
  state = {
    // 속성명:속성값
    // 할일 목록(mock data) 데이터
    todoData: [
      { id: 1, title: "할일 1", completed: false },
      { id: 2, title: "할일 2", completed: false },
      { id: 3, title: "할일 3", completed: false },
      { id: 4, title: "할일 4", completed: false },
    ],
    todoValue: "",
  };

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };
  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };
  deleteClick = (id) => {
    // 클릭된 아이디와 다른요소들만 걸러서 새로운 배열 생성
    const nowTodo = this.state.todoData.filter((item) => item.id !== id);
    // console.log("클릭", nowTodo);
    this.setState({ todoData: nowTodo });
  };

  toggleClick = (id) => {
    // map을 통해서 this.state.todoData의 complete를 업데이트해보자
    const updateTodo = this.state.todoData.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({ todoData: updateTodo });
  };

  changeTodoValue = (event) => {
    this.setState({ todoValue: event.target.value });
  };

  addTodoSubmit = (event) => {
    // 웹브라우저 새로 고침을 하면 안되므로 막아줌.
    event.preventDefault();
    const addTodo = {
      // 아이디 값은 배열.map의 키로 활용예정.유니크 값 만들려고
      id: Date.now(),
      // 입력창으이 내용을 추가
      title: this.state.todoValue,
      // 할일이 추가될때 아직 완료한 것은 아니므로 false로 
      completed: false,
    };
    //새로운할일을 일단 복사하고 복사된 배열에 추가하여서 업데이트
    // 기존 할일을 디스크럭쳐링 하여서 보사본 만듦
    this.setState({ todoData: [...this.state.todoData, addTodo] });
    // 새로운 할일을 ㅍ추가했으므로 내용입력창의 글자를 최기화
    this.setState({ todoValue: "" });
  };
  render() {
    return (
      <div className="container">
        <div className="toodoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>

          {this.state.todoData.map((item) => (
            <div style={this.getStyle(item.completed)} key={item.id}>
              <input
                type="checkbox"
                defaultChecked={item.completed}
                onChange={() => this.toggleClick(item.id)}
              />
              {item.title}
              <button
                style={this.btnStyle}
                onClick={() => this.deleteClick(item.id)}
              >
                {" "}
                x{" "}
              </button>
            </div>
          ))}

          <form style={{ display: "flex" }} onSubmit={this.addTodoSubmit}>
            <input
              style={{ flex: "10" }}
              type="text"
              placeholder="할일을 입력하세요."
              value={this.state.todoValue}
              onChange={this.changeTodoValue}
            />
            <input style={{ flex: "1" }} type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
