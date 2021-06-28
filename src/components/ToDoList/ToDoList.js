import React, {Component} from 'react';
import Header from './Header';
import List from './List';
import BulkAction from './BulkAction';
class ToDoList extends Component {
  render(){
  const {todoList, isDisplayForm, onSearch, todoEditing, onSubmit, onFormDetail, onDelete} = this.props
  return (
    <div className="todoList">
        <Header onSearch = {onSearch} />
        <List 
          todoList={todoList} 
          isDisplayForm={isDisplayForm}
          onFormDetail={onFormDetail}
          onDelete={onDelete}
          todoEditing={todoEditing}
          onSubmit ={onSubmit}
        /> 
        <div className="bodys">
            <BulkAction />
        </div>
    </div>
  );
  }
}
export default ToDoList;