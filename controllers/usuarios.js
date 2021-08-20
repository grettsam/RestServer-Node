const { response } = require("express");

const usuariosGet = (req, res = response) => {
    const { page = 1, limit = 10 } = req.query;

    res.json({
        msg: "Get API - controlador",
        page,
        limit,
    });
};
const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: "Post API - controlador",
        nombre,
        edad,
    });
};
const usuariosPut = (req, res = response) => {
    const id = req.params.id;

    res.json({
        msg: "Put API - controlador",
        id,
    });
};
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "Delete API - controlador",
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
};