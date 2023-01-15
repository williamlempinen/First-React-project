import React, { Component } from 'react';
import Header from './header';
import Intro from './intro';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      thingsToDo: [
        "Learn more about developing full applications with React (MERN-stack)",
        "Learn more about cloud-services (Microsoft Azure)",
        "Remember to study hard for your exams"
      ]
    }
    this.inputValue = this.inputValue.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
  }

  inputValue(e) {
    this.setState({
      todo: e.target.value
    });
  }

  addNewTodo() {
    const newThing = this.state.todo;
    if (newThing.length >= 1) {
      this.setState({
        todo: "",
        thingsToDo: [...this.state.thingsToDo, newThing]
      });
    } else {
      alert("Make sure to type something in the input-field");
    }
  }

  render() {
    return (
      <div>

        <Header />
        <Intro date={ Date() }/>
        <h2>Here I have listed couple of things that I'm focusing on before summer starts. Feel free to add new things...</h2>
        <input value={ this.state.todo } onChange={ this.inputValue } placeholder="Type here"/>
        <br />
        <button className="one-button" onClick={ this.addNewTodo }> Add </button>
        <ul>
          {this.state.thingsToDo.map( (todo, index) => {
              return <li key={ index }>{ todo }</li> 
            })
          }
        </ul>

      </div>
    );
  }
}

export default App;
