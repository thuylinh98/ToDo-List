import React, {Component}from 'react';
//Componenst
import NewTask from './components/NewTask/NewTask';
import ToDoList from './components/ToDoList/ToDoList';
//CSS
import './App.css';
import './CSS/Todo.css';
class App extends Component {
  constructor(props){
    super(props);
     var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      todoList:[
      ],
      isDisplayForm: false,
      todoEditing : null,
      search:'',
      filterList: [],
      date: date
    } 
  }
  componentWillUnmount(){
    if (localStorage && localStorage.getItem('todoList')){
      var todoList = JSON.parse(localStorage.getItem('todoList'));
      this.setItem({
        todoList : todoList
      });
    }
  }
  s4(){
    return Math.floor((Math.random() * 1000) + 1);
  }

  todoID(){
    return this.s4()+ this.s4() + '-' + this.s4()+this.s4()+'-'
    + this.s4()+'-'+this.s4();
  }
  // onFormDetail = () => {
  //   this.setState({
  //     isDisplayForm : !this.state.isDisplayForm
  //   });
  // } 
  //--------
  onSubmit = (data) =>{
    var {todoList}=this.state
    if (data.nameTodo === ''){
      alert("Vui long nhap ten task")
    }else if(data.dueDate <this.state.date && data.dueDate !== ''){
      alert("Vui long chon ngay bat dau tu hom nay")
    }
    else{
      if(data.id ===''){
        data.id= this.todoID();
        todoList.push(data);
      }else{
        var {todoList} = this.state;
        var index = -1;
        todoList.forEach((todo, i)=>{
          if(todo.id == data.id){
            index=i;
            todoList[index]=data;
          }
        });
        this.onCloseForm();
      }
      this.setState({
        todoList : todoList,
        todoEditing : null
      });
      localStorage.setItem('todoList', JSON.stringify(todoList));
    } 
  }
  // onSubmit = (data) =>{
  //   var {todoList}=this.state;
  //     data.id= this.todoID();
  //     todoList.push(data);
  //   this.setState({
  //     todoList : todoList
  //   });
  //   localStorage.setItem('todoList', JSON.stringify(todoList));
  // }
   onDelete = (id) => {
    var {todoList} = this.state;
    var index = this.findIndex(id);
    if(index !== -1){
      todoList.splice(index, 1);
      this.setState({
        todoList : todoList
      });
      localStorage.setItem('todoList', JSON.stringify(todoList));     
    }
  }
  findIndex = (id) =>{
    var {todoList} = this.state;
    //  todoList.forEach((todo, index)=>{
    //   if(todo.id == id){
    //     return index;
    //     console.log('test',todoList);
    //   }
    //   console.log(todo, ' / ', id)
    // });
    //return -1;
    todoList.forEach((todo, index)=>{
      if(todo.id == id){
        return index;
      }
    })
  }
  onFormDetail = (id) =>{
    var {todoList} = this.state;
    var index = -1;
    todoList.forEach((todo, i)=>{
      if(todo.id == id){
        index=i;
      }
    });
    var todoEditing = todoList[index];
    this.setState({
      todoEditing: todoEditing
    });
    this.onShowForm();
  }
  onShowForm = () => {
    this.setState({
      isDisplayForm : !this.state.isDisplayForm,
      todoEditing :null
    });
  }
  onCloseForm = () => {
    this.setState({
      isDisplayForm : false
    });
  }
  onSearch = (search) => {
    this.setState({
      search: search.toLowerCase()
    })
  }
  render() {
    const {todoList, isDisplayForm, todoEditing, search } = this.state
    if (search){
      todoList = todoList.filter(todo=>{
        return todo.nameTodo.toLowerCase().indexOf(search) !== -1;
      });
    }
    return (
      <div className="App">
        <div className="app-lefts">
          <NewTask onSubmit={this.onSubmit}/>  
        </div>
        <div className="app-rights">
          <ToDoList 
            todoList={todoList} 
            isDisplayForm={isDisplayForm} 
            onFormDetail={this.onFormDetail}
            onDelete={this.onDelete}
            todoEditing={todoEditing}
            onSubmit={this.onSubmit}
            onSearch={this.onSearch}
          />
        </div> 
      </div>
    );
  }
}
export default App;

