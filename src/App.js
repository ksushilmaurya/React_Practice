import React, { Component } from 'react';
import './App.css';
import './Person/Person.css'
import Person from './Person/Person';

class App extends Component {
 
  state = {
    persons : [
      {"id" : "aaa" , "name" : "Sushil", "age" : 30},
      {"id" :"bbb",   "name" : "Dolly", "age" : 40},
      {"id" :"ccc" ,   "name":"Mona", "age" : 50}
    ],
    showList : false

  }

  onChangeEventHandler = (event, personId) => {
    console.log("onChangeEventHandler called",event, personId);

    var personIndex = this.state.persons.findIndex((person) => {
      return person.id === personId
    })

    console.log("personIndex is - ",personIndex);

    var tempPerson = this.state.persons[personIndex];
    console.log("tempPerson is - ",tempPerson);

    tempPerson.name = event.target.value;

    var tempPersons = [...this.state.persons];
    console.log("person copy is - ",tempPersons);

    tempPersons[personIndex] = tempPerson;
    this.setState({
      persons : tempPersons
    })
  }

  toggleList = () => {
    this.setState({
      showList : !this.state.showList 
    })
  }

  deletePerson = (index) => {
    console.log("delete person called", index);
    let tempPersons = this.state.persons.slice();
    tempPersons.splice(index,1)
    console.log("temp person is - ", tempPersons)
    this.setState({
      persons : tempPersons
    })
  }

  render() {

    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    }

    let persons = null;

    if(this.state.showList) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name= {person.name} 
              age={person.age} 
              change={(event) => {this.onChangeEventHandler(event, person.id)}} 
              key={person.id} 
              click={this.deletePerson.bind(this,index)}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1> I am react app </h1>
        <button style = {style} onClick={this.toggleList}> Toggle List</button>

        {persons}
      </div>
    );
  }
}

export default App;
