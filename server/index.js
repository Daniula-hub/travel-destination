const express = require ('express');
const { default: axios } = require('axios');
const { getDestinations, addDestination, deleteDestination,editDestination } = require ('./destinationController')

const app = express();

app.use(express.json());

app.get('/api/destinations', getDestinations);
app.post ('/api/destinations', addDestination);
app.put ('/api/destinations', editDestination);
app.delete ('/api/destinations/:id', deleteDestination);



app.listen( 5050, () => console.log('listening to port 5050'));