const destinations = [
    {
    country: "Australia",
    city: "Canberra",
    placesToVisit: "Places To Visit: Sydney, Kakadu National Park, Great Ocean Road.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzVEK9v7yYshDv1RRKVznVFmuPlQiv3Q-TQ&usqp=CAU",
    isFavorite: false,
    id: 1,
}, 
    {
    country: "Costa Rica",
    city: "San Jose",
    placesToVisit: "Places To Visit: Monteverde, Tamarindo Beach and Arenal Volcano.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAQSKU6v6XBHtgFX_d41wAxxCCseuDrAPr3Q&usqp=CAU",
    isFavorite: false,
    id: 2,
},
{
    country: "Brazil",
    city: "Brasília",
    placesToVisit: "Places To Visit: Christ the Redeemer Statue,Rio de Janeiro, Iguazu Falls and National Park.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCydDpL0L6ZWfPyQTqaOGX_sAmIDgav0RP5w&usqp=CAU",
    isFavorite: false,
    id: 3,
},
{
    country: "Iceland",
    city: "Reykjav",
    placesToVisit: "Places To Visit: Northern Lights, Blue Lagoon Iceland, Dynjandi Waterfall.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSCggtpP0yIy8-VTPaQSz1lU75GfVOqcIJQ&usqp=CAU",
    isFavorite: false,
    id: 4,
},
{
    country: "Argentina",
    city: "Buenos Aires",
    placesToVisit: "Places To Visit: Buenos Aires, Patagonia and take a Tango dance class.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tHt_JhttACBLJYt7EXazvjS7xUU71LDc--67POnFWEjxESQvnP-B_Teg0nmzGMALXPc&usqp=CAU",
    isFavorite: false,
    id: 5,
},
{
    country: "Greece",
    city: "Athenai",
    placesToVisit: "Places To Visit: Santorini, Mykonos, Rhodes.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4J9EsFYIe5u-m6Um6jfqZEBsuiov_rr9BDw&usqp=CAU",
    isFavorite: false,
    id: 6,
},
];

let id = 7;

module.exports = {
    getDestinations: (req, res) => {
        res.status(200).send(destinations);
    },

    addDestination:(req, res) => {
        const { country, city, placesToVisit, image } = req.body;

        const newDestination = {
            country,
            city,
            placesToVisit,
            img:image,
            isFavorite: false,
            id,
        }

        id++;
        destinations.push(newDestination);
        res.status(200).send(destinations);
    },

    deleteDestination:(req, res) => {
        const {id} = req.params
        const index = destinations.findIndex((e) => {
            return e.id === +id
        })
        if (index === -1){
            res.status(500).send("Dstination Not Found")
        }
        destinations.splice(index, 1)
        res.status(200).send(destinations)
    },

    editDestination: (req, res) => {
        const { city, id } = req.body;
        const index = destinations.findIndex((e) => {
            return e.id === +id
        })
        if (index === -1){
            res.status(500).send("Dstination Not Found")
        }
        destinations[index].city = city;
        res.status(200).send(destinations)
    }
    

};
