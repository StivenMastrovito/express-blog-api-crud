import menu from "../dati.js"

function index(req, res){
    res.send("Mostra tutto il menu");
}

function show(req, res){
    const id = parseInt(req.params.id);
    res.send(`mostra l'elemento con id: ${id}`);
}

function store(req, res){
    res.send("Aggiungi un elemento");
}

function update(req, res){
    const id = parseInt(req.params.id);

    res.send(`Modifica l'elemento con id: ${id}`);
}

function modify(req, res){
    const id = parseInt(req.params.id);

    res.send(`Modifica parzialmente l'elemento con id: ${id}`);
}

function destroy(req, res){
    const id = parseInt(req.params.id);

    res.send(`Elimino l'elemento con id ${id}`);
}
const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
}

export default controller;