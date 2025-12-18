import menu from "../dati.js"

function index(req, res) {
    const tag = req.query.tags;
    let filteredMenu = menu;

    if (tag !== undefined) {
        filteredMenu = menu.filter(({ tags }) => tags.includes(tag));
    }

    res.json(filteredMenu)


}

function show(req, res) {
    const id = parseInt(req.params.id);
    const elem = menu.find((item) => item.id === id);

    if (elem === undefined) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Elemento non trovato",
        })
    }
    res.json(elem)
}

function store(req, res) {
    res.send("Aggiungi un elemento");
}

function update(req, res) {
    const id = parseInt(req.params.id);

    res.send(`Modifica l'elemento con id: ${id}`);
}

function modify(req, res) {
    const id = parseInt(req.params.id);

    res.send(`Modifica parzialmente l'elemento con id: ${id}`);
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    console.log(id);

    const indexId = menu.findIndex((item) => item.id === id);
    console.log(indexId);

    if (indexId === -1) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Elemento non trovato",
        })
    }

    menu.splice(indexId, 1);
    res.status(200);
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