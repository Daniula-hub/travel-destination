import React, { Component } from 'react';
import axios from 'axios';
import NewDestination from './Components/NewDestination';
import Edit from './Components/Edit';
import './App.css';


class App extends Component {
  constructor (){
    super();

    this.state = {
      destinations: [],
      
    }
  }

componentDidMount(){

axios.get('/api/destinations')
.then((res) => {
  // console.log(res.data);
  this.setState({ destinations: res.data })
})
.catch((err) => console.log(err))
}

updateDestinations = (destinations) => {
  this.setState ({ destinations })
}

deleteDestination = (id) => {
axios.delete(`/api/destinations/${id}`)
.then((res) => {
  // console.log(res.data);
  this.setState({ destinations: res.data })
})
.catch((err) => console.log(err))
}

editDestination = (city, id )=> {
  axios.put('/api/destinations', { city, id})
  .then((res) => {
    // console.log(res.data);
    this.setState({ destinations: res.data })
  })
  .catch((err) => console.log(err))
  }

  
render() {
  return (

    <div className="app_container">
      {this.state.destinations.map((destination) => {
        return (
          <div className="card_container">
            <h1> {destination.country}</h1>
            <h2> {destination.city}</h2>
            <img className="destination_img" src= {destination.img} alt="destination_picture" />
            <h3> {destination.placesToVisit}  </h3>
           <img className="heart_img" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpdjJ5V0cS2TeFJM0Hafclaj0qbmwktIdO1A&usqp=CAU" alt="heart" />
           <Edit 
           editDestination={this.editDestination}
           destinationId={destination.id}/>
            <button className="deleteButton" onClick={()=> this.deleteDestination(destination.id)}> Delete Destination </button>
          </div>
        )
      })}
      <NewDestination 
      updateDestinations={this.updateDestinations} />
      
    </div>

   
    
    )

  }
 
}

export default App;