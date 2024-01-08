import React, { Component } from "react";
import "./TodoApp.css";

export default class TodoApp extends Component {
  state = {
    input: " ",
    items: [],
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value, //if there is multiple use [event.target.name]
    });
  };

  storeItems = (event) => {
    event.preventDefault(); //this is used so that the page dont refresh again and again
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input: "", //we are using spread operator functionhere
    });
  };

  deleteItem = (key) => {
    const allItems = this.state.items;
    allItems.splice(key, 1);             //splice is used for deleteing and we use Key for the index value and 1 is given to delete only that item not anything in the front or back
                                         // if we give 2 item it will 2 items
    this.setState({
      items: allItems,
    });
  };

  render() {
    const { input, items } = this.state;

    return (
      <div className="todo-container">
        <form class="input-section" onSubmit={this.storeItems}>
          <h1>Todo App</h1>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter items ..."
          />
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}{" "}
              <i
                className="fa-solid fa-trash"
                onClick={() => this.deleteItem(index)}
              ></i>{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
// ()=> this used so that the system wont be infinte we cant open a () inside a onCick it will infinite
