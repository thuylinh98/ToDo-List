import React, {Component} from 'react';
import ToDo from './ToDo';
import Detail from '../NewTask/Detail';
class List extends Component  {
  render(){
  const {todoList, isDisplayForm,todoEditing, onSubmit, onFormDetail, onDelete} = this.props
  return (
    <section className="bodys">
        <ul className="todo-list">
            {
              todoList.map(todo => 
              <ToDo key={todo.id}
                    todo={todo}
                    isDisplayForm={isDisplayForm}
                    onFormDetail={onFormDetail}
                    onDelete={onDelete}
                    //onFormDetail={this.props.onFormDetail}
                    //onDelete={this.props.onDelete}
                    />)       
            } 
            {    
              isDisplayForm ? <Detail todo={todoEditing} onSubmit={onSubmit}/>: ''
            }
        </ul>
        
    </section>
  );
}
}

export default List;