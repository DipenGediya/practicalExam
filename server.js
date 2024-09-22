require("dotenv").config()
let http = require("http");
let express = require("express");
let cors = require("cors");
const dbConnect = require("./dbConnect/dbConnect");
const routes = require("./routes");

let app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/v1", routes)

//db connect
dbConnect();

http.createServer(app).listen(process.env.PORT, () => {
    console.log("server started");
})