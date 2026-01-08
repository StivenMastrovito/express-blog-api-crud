import express from "express"
import routerMenu from "./routers/menu.js";
import cors from "cors"
import notFound from "./middlewares/notFound.js";


const app = express();
const port = 3000;

const corsOption = {
    origin: "http://localhost:5173"
}

app.use(cors(corsOption));

app.use(express.json());

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("Benvenuto nell' API del mio bar");
})

app.use("/menu", routerMenu);

app.use(notFound);




app.listen(port, () => {
    console.log("Server in ascolto sulla porta: ", port);
})
