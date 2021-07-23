import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
constructor(){
    super();
    this.state ={
        city: " ",
    }
}

handleEdit= (e) => {
    this.setState ({
        city: e.target.value
        })
}


render (){
    return (
    <div>
        <input  className="Edit" onChange={this.handleEdit} placeholder="Type new city" /> 
    <button className="editButton" onClick={ () => {this.props.editDestination(this.state.city, this.props.destinationId)}}> Edit Destination </button>
    </div>
    )}
    }

export default Edit;