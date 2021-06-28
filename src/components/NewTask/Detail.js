import React, {Component, useState} from 'react';
class Detail extends Component{
  constructor(props){
    super(props);
    this.state={
      id:'',
      nameTodo: '',
      description:'',
      dueDate:'',
      pioryte:'Normal'
    }
  }
  onChange=(event)=>{
    var target=event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }
  onSubmit = (event) =>{
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
    // if (this.props.isDisplayForm !== true){
    //   this.state.id = '';
    // }
  }
  onClear =() =>{
    this.setState({
      nameTodo:'',
      description:'',
      dueDate:'',
      pioryte:'Normal'
    })
  }
   componentDidMount(){
    if(this.props.todo){
      this.setState({
        id: this.props.todo.id,
        nameTodo:this.props.todo.nameTodo,
        description:this.props.todo.description,
        dueDate:this.props.todo.dueDate,
        pioryte:this.props.todo.pioryte
      });
      
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.todo){
      this.setState({
        id: nextProps.todo.id,
        nameTodo:nextProps.todo.nameTodo,
        description:nextProps.todo.description,
        dueDate:nextProps.todo.dueDate,
        pioryte:nextProps.todo.pioryte
      });
    }else if(nextProps && nextProps.task === null){
      this.setState({
        id:'',
        nameTodo: '',
        description:'',
        dueDate:'',
        pioryte:'Normal'
      });
    }
  }
render(){
  var {id} =  this.state;
  const {todo, isDisplayForm}=this.props
  //console.log('detail',todo,'id:',id)
  return (
      <form onSubmit={this.onSubmit}>
        <div className="bodys">
            <input 
              className="inputs add-new-task" 
              placeholder='Add new task ...'
              name="nameTodo"
              value={this.state.nameTodo}
              onChange={this.onChange}
            >
            </input>
            <h4 className="text">Description</h4>
            <textArea 
              className="inputs text-description" 
              rows="9"
              name='description' 
              value={this.state.description}
              onChange={this.onChange}
              />
            <h4 className="text">Due Date</h4>
            <input 
              className="inputs" 
              type="date" name="dueDate"
              value={this.state.dueDate}
              onChange={this.onChange}
              ></input>
            <h4 className="text">Pioryte</h4>
            <select className="inputs"
                    name="pioryte"
                    value={this.state.pioryte}
                    onChange={this.onChange}
                    >
                <option> Normal</option>
                <option> Low</option>
                <option> High</option>
            </select>
             <button type='submit' className="button-add"> 
             {
               id === '' ? 'Add' : 'Update'
             }  
             </button>
        </div>
      </form>
  );
}}
export default Detail;