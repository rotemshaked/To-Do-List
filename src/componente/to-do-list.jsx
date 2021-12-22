import React from "react";
import "./style.css";
import Input from "./input";

export default class ToDoList extends React.Component {
  render() {
    return (
      <div className="background">
        <Input></Input>
      </div>
    );
  }
}
