import express from "express"
import routerMenu from "./routers/menu.js";
const app = express();
const port = 3000;

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("Benvenuto nell' API del Kyosco Cafe");
})

app.use("/menu", routerMenu);





app.listen(port, () => {
    console.log("Server in ascolto sulla porta: ", port);
})
