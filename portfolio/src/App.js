import React from 'react';
import './App.css';
import Person from './Components/Person'

class App extends React.Component {
  state = {
    persons: [
      { name: 'Brent', age: 35 },
      { name: 'Lily', age: 3 },
      { name: 'Colleen', age: 33 }
    ],
    otherState: 'blah blah'
  }

switchNameHandler = () => {
  this.setState({persons: [
    { name: 'Brent', age: 35 },
    { name: 'Lily', age: 3 },
    { name: 'Colleen', age: 43 }
  ] 
})
}

render() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working ja!</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    </div>
    );
  }
}


export default App;
