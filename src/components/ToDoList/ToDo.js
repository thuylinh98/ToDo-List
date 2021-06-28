import React, {Component} from 'react';
class ToDo extends Component {
  onFormDetail = () => {
    this.props.onFormDetail(this.props.todo.id);
  }
  onDelete = () => {
    var id = this.props.todo.id
    this.props.onDelete(id);  
  }
render(){
  const {todo, isDisplayForm} = this.props
  return (
  <div> 
    <li> 
      <div className="todo-detail">
        <div className="todo">
            <input type="checkbox" name="vehicle1" value="todo"></input>
            <label className="text">{todo.nameTodo}</label>
            <button 
              className="button remove"
              type="button"
              onClick = {this.onDelete}
            >Remove
            </button>
            <button 
            className="button done"
            onClick={this.onFormDetail}
            >
              Detail
            </button>
            
        </div>
        
      </div>  
    </li>
          {/* {
            isDisplayForm ? <Detail />: ''
          } */}
  </div>
  );
}
}
export default ToDo;