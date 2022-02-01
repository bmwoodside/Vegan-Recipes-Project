const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());
// top three lines pull in express

app.get("/api", (req,res)=>{
    res.json({message: "hey its me the server!"});
})
// traditional route for our express server
// arrow function describes what happens when we access the route

require("./server/config/mongoose.config");
// all this does is talk to mongo server

app.use(express.json(), express.urlencoded({extended:true}));
// line above supports post requests

require("./server/routes/recipe.routes")(app);
// this sends our app over to the routes

app.listen(port, ()=>console.log(`running on ${port} is new port!`));