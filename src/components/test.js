import React, {Component}from 'react';
class test extends Component {
  render() {
    const {todoList, isDisplayForm} = this.state
    return (
      <div className="App">
        <div className="app-lefts">
          <NewTask />  
        </div>
        <div className="app-rights">
          <ToDoList todoList={todoList} 
          isDisplayForm={isDisplayForm} 
          />
        </div> 
      </div>
    );}
}
export default test;

