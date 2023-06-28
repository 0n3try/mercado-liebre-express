const fs = require('fs');
const path = require('path')

const datos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/user.json')));

const cookieExiste = (req, res, next) => {
    if (!req.session.usuarioLogeado && req.cookies.recordame){
        const usuario = datos.find((row) => row.email == req.cookies.recordame);
        delete usuario.password
        req.session.usuarioLogeado = usuario
    }
    next()
}

module.exports = cookieExiste;