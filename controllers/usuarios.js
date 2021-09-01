const { response } = require("express");
const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");


const usuariosGet = (req, res = response) => {
    const { page = 1, limit = 10 } = req.query;

    res.json({
        msg: "Get API - controlador",
        page,
        limit,
    });
};
const usuariosPost = async(req, res = response) => {

    // Validar si hay algun error 


    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    //Ver si es correo ya existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        return res.status(400).json({
            msg: 'El correo ya exististe'
        })
    }


    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);
    //guardar el usuario
    await usuario.save();
    res.json({
        usuario,
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