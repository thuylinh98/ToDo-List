import React, {Component} from 'react';
class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      search: ''
    }
  }
  onChange = (event ) => {
    var target=event.target;
    var name = target.name;
    var value = target.value;
    this.props.onSearch
    (name === 'search' ? value : this.state.search)
    this.setState({
      [name]: value
    });

  }

render(){
  var {search} = this.state;
  var {onSearch}= this.props;
  return (
    <div>
        <h3>To Do List </h3>
         <div className="bodys">
            <input
            type="search" 
            name="search" 
            className="inputs" 
            value = {search}
            onChange = {this.onChange}
            placeholder="Search ..."/>
        </div> 
    </div>
  );
}}

export default Header;