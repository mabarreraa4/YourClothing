const bodyParser = require("body-parser")
const express = require ("express");
const app = express ();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.set('json spaces', 2);

const { controller }  = require('./controller')

app.get("/", (req, res)=>{
 res.send("hola mundo");
})

app.get("/users", (req, res)=>{
    controller.getUsers(res);
})

app.get("/prendas", (req, res)=>{
    controller.getPrendas(res);
})

app.get("/vendedores", (req, res)=>{
    controller.getVendedores(res);
})

app.get("/compradores", (req, res)=>{
    controller.getCompradores(res);
})

app.get("/marcas", (req, res)=>{
    controller.getMarcas(res);
})

app.get("/colores", (req, res)=>{
    controller.getColores(res);
})

app.get("/tiempo_usos", (req, res)=>{
    controller.gettiempo_usos(res);
})

app.get('/prendas/:talla', (req, res ) => {
    let { talla } = req.params;
    controller.getPrendas(talla, res)
})

app.get('/prendas/marcas/:nombre', (req, res ) => {
    let marca = req.params.marca;
    let prenda = req.params.prenda;
    controller.getPrendasByMarca(marca, prenda, res)
})

app.post("/prendas", (req, res) => {

    console.log("the body is",  req.body)
    let prenda = {
        prenda: req.body.prenda,
        talla: req.body.talla
    }
    controller.postPrenda(prenda,res);
})

app.post("/vendedores", (req, res) => {
    console.log("the body is",  req.body)
    let vendedor = {
      nombre1: req.body.nombre1,
      nombre2: req.body.nombre2,
      apellido1: req.body.apellido1,
      apellido2: req.body.apellido2,
      identificacion: req.body.identificacion,
      pais: req.body.pais,
      ciudad: req.body.ciudad,
      telefono: req.body.telefono,
    }
    controller.postVendedor(vendedor,res);
})

app.post("/compradores", (req, res) => {
    console.log("the body is",  req.body)
    let comprador = {
      nombre1: req.body.nombre1,
      nombre2: req.body.nombre2,
      apellido1: req.body.apellido1,
      apellido2: req.body.apellido2,
      identificacion: req.body.identificacion,
      pais: req.body.pais,
      direccion:req.body.direccion,
      telefono: req.body.telefono,
      calificacion: req.body.calificacion,
    }
    controller.postComprador(comprador,res);
})

app.post("/marcas", (req, res) => {

    console.log("the body is",  req.body)
    let marca = {
        nombre: req.body.nombre,
        pais: req.body.pais,
        proveedor: req.body.proveedor,
    }
    controller.postMarca(marca,res);
})

app.post("/colores", (req, res) => {

    console.log("the body is",  req.body)
    let color = {
        color: req.body.color,
        estampado: req.body.estampado,
    }
    controller.postColor(color,res);
})

app.post("/tiempo_uso", (req, res) => {

    console.log("the body is",  req.body)
    let tiempo_uso = {
        dias_uso: req.body.dias_uso,
        remodelar: req.body.remodelar,
        arreglar: req.body.arreglar,
    }
    controller.postTiempo_uso(tiempo_uso,res);
})

exports.app = app;