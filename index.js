
const express = require("express");
const app = express();

const frontRoute = require("./routes/front")
const log = require("./middleware/log")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(log);
app.use("/",frontRoute)

const PORT = 8080

app.listen(PORT,function(){
    console.log(`Listening on PORT ${PORT}`)
});