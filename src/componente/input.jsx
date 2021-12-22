import React from "react";
import "./style.css";

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      task: { value: "", key: "" },
      listOfTasks: [],
    };
  }

  InputChange = (e) => {
    let idNumber = Math.random;
    this.setState({ task: { key: idNumber }, task: { value: e } });
  };

  addTaskToList = (task) => {
    let listCopy = this.state.listOfTasks;
    listCopy.push(task);
    this.setState({ listOfTasks: listCopy, task: { value: "" } });
  };

  render() {
    return (
      <div className="inputsContiner">
        <input
          className="inputNewTask"
          type="text"
          placeholder="Add New Task"
          onChange={(e) => {
            this.InputChange(e.target.value);
          }}
        ></input>
        <ul>
          {this.state.listOfTasks.map((task) => {
            return <li>{task}</li>;
          })}
        </ul>
        <button
          className="submitButton"
          type="submit"
          onClick={() => {
            this.addTaskToList(this.state.task.value);
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}
