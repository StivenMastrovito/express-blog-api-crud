export default function notFound(req, res, next){
    res.json({
        info: "Error404",
        message: `Non è stata trovata nessuna pagina con url ${req.path}`,
    })
}