const express = require("express");
const app = express();
const port = process.env.port || 3000;
const startfordData = require("../data/Stratford.json")
const harrowData = require("../data/Harrow.json")
const heathrowData = require("../data/Heathrow.json")

// LEVEL 100
app.get("/", (req, res) =>{
    res.send(allData);
});

// LEVEL 200
app.get("/pharmacies", (req, res) =>{
    console.log(req.method, req.url);
    res.send(startfordData.pharmacies);
});

app.get("/colleges", (req, res) =>{
    res.send(startfordData.colleges);
});

app.get("/doctors", (req, res) =>{
    res.send(startfordData.doctors);
});

app.get("/hospitals", (req, res) =>{
    res.send(startfordData.hospitals);
});

// LEVEL 300

app.get("/:city.Data/pharmacies", (req, res) =>{
    res.send(startfordData.pharmacies);
});


app.listen(port, function(){
    console.log(`Server is running on port ${port}`)
});




