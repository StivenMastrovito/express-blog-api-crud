import menu from "../dati.js"
export default function controlloId(req, res, next){
    const id = parseInt(req.params.id);
    const item = menu.find((item) => item.id === id);
    if(item === undefined){
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Elemento non trovato",
        })
    }
    req.item = item;
    req.id = id;
    next();
}