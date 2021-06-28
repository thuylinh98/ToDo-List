import React, { Component } from 'react';
import Detail from './Detail';
class NewTask extends Component {
render(){
  const {onSubmit}=this.props
  return (
    <div className="newTask">
        <h3>New Task </h3>
        <Detail onSubmit={onSubmit} />      
    </div>
  );
}}

export default NewTask;