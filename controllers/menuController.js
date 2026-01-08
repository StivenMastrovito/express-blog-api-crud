import menu from "../dati.js"

function index(req, res) {
    const tag = req.query.tag;
    const prezzoMin = parseFloat(req.query.prezzomin);
    const prezzoMax = parseFloat(req.query.prezzomax);
    
    let filteredMenu = menu;   
    console.log(tag, prezzoMin, prezzoMax);

    if (tag !== undefined) {
        filteredMenu = filteredMenu.filter(({ tags }) => tags.includes(tag));
    }
    if (!isNaN(prezzoMin)) {
        filteredMenu = filteredMenu.filter(({ prezzo }) => prezzo >= prezzoMin);
    }
    if (!isNaN(prezzoMax)) {
        filteredMenu = filteredMenu.filter(({ prezzo }) => prezzo <= prezzoMax);
    }
    
    res.json(filteredMenu)


}

function show(req, res) {
    const elem = req.item;
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
    const item = req.item;
    const dati = req.body;
    

    if (dati.nome === undefined || dati.nome.length < 2) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Inserire il nome di almeno due caratteri",
        })
    }


    item.nome = dati.nome;
    item.prezzo = dati.prezzo;
    item.tags = dati.tags;

    res.status(201);
    res.json(item);
}

function modify(req, res) {
    const item = req.item;

    res.send(`Modifica parzialmente l'elemento con id: ${id}`);
}

function destroy(req, res) {
    const indexId = menu.findIndex((item) => item.id === req.id);

    menu.splice(indexId, 1);
    res.status(200);
    res.json(menu)
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