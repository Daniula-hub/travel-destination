import React, { Component } from 'react';
import axios from 'axios';


class NewDestination extends Component {
constructor(){
    super();
    this.state ={
        country:" ",
        city: " ",
        image: " ",
        placesToVisit: " ",

    }
}

handleChange = (e) => {
this.setState ({
    [e.target.name]: e.target.value
    })
}

handleClick = () => {
const { country, city, image, placesToVisit } = this.state;

axios.post('/api/destinations', { country, city, image, placesToVisit })
.then((res) => {
    // console.log(res);
this.props.updateDestinations(res.data)
})
.catch((err) => console.log(err))
}

render(){
    return (
        <div>
            <input className="inputSpace" name="country" onChange={this.handleChange} placeholder="Country"/> 
            <input className="inputSpace" name="city" onChange={this.handleChange} placeholder="City"/> 
            <input className="inputSpace" name="image" onChange={this.handleChange} placeholder="Image"/> 
            <input className="inputSpace" name="placesToVisit" onChange={this.handleChange} placeholder="Places to visit:"/> 
            <button className="inputSpace" className="addButton" onClick={this.handleClick}> Add Destination </button>

        </div>
        )
    }
}

export default NewDestination;