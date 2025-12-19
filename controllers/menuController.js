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
    const dati = req.body;

    const newId = menu[menu.length - 1].id + 1;

    if (dati.nome === undefined || dati.nome.length < 2) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Inserire il nome di almeno due caratteri",
        })
    }

    const newItem = {
        id: newId,
        nome: dati.nome,
        prezzo: dati.prezzo,
        tags: dati.tags,
    }
    menu.push(newItem)
    res.status(201);
    res.json(newItem);
}

function update(req, res) {
    const id = parseInt(req.params.id);

    if (id === undefined) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Elemento non trovato",
        })
    }

    const dati = req.body;
    

    if (dati.nome === undefined || dati.nome.length < 2) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Inserire il nome di almeno due caratteri",
        })
    }

    const item = menu.find((elem) => elem.id === id);

    item.nome = dati.nome;
    item.prezzo = dati.prezzo;
    item.tags = dati.tags;

    res.status(201);
    res.json(item);
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