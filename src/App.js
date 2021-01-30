import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import AppAnimal from "./Animals/Animal";

class App extends Component {
  state = {
    animals: [
      { name: "Panda", color: "White and Black" },
      { name: "Dog", color: "DeepBlue" },
      { name: "Cat", color: "Yellow" },
    ],
  };
  render() {
    return (
      <div className="card">
        <div className="card-body">This is some text within a card body.</div>
        <AppAnimal
          name={this.state.animals[0].name}
          color={this.state.animals[0].color}
        />
        <AppAnimal
          name={this.state.animals[1].name}
          color={this.state.animals[1].color}
        />
        <AppAnimal
          name={this.state.animals[2].name}
          color={this.state.animals[2].color}
        />
      </div>
    );
  }
}

export default App;
