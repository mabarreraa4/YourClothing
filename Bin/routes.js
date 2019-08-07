const bodyParser = require("body-parser")
const express = require ("express");
const app = express ();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

const { controller }  = require('./controller')

app.get("/version", (req, res) => {
    res.send({ version: "1.0.0" });
});

app.get("/", (req, res)=>{
 res.send("hola mundo");
})

//agregar una prenda//
app.post("/prendas", function(req, res) {
    let { prenda } = req.body;
    controller.setPrenda(prenda, res);
});

//traer todas las prendas//
app.get("/prendas", (req, res)=>{
    controller.getPrendas(res);
})

//traer una prenda por su id//
app.get("/prendas/:id", function(req, res) {
    let { id } = req.params;
    controller.getPrenda(id, res);
});

//actualizar una prenda//
app.put("/prendas/:id", function(req, res) {
    let prenda = req.body.prenda;
    prenda.id = req.params.id;
    controller.updatePrenda(prenda, res);
});

//agregar un vendedor//
app.post("/vendedores", (req, res) => {
    let { vendedor } = req.body;
    controller.setVendedor(vendedor, res);
});

//traer todos los vendedores//
app.get("/vendedores", (req, res)=>{
    controller.getVendedores(res);
})

//traer a un vendedor por su id//
app.get("/vendedores/:id", (req, res) => {
    let { id } = req.params;
    controller.getVendedor(id, res);
});

//agregar un comprador//
app.post("/compradores", (req, res) => {
    let { comprador } = req.body;
    controller.setComprador(comprador, res);
});

//traer todos los comrpadores//
app.get("/compradores", (req, res)=>{
    controller.getCompradores(res);
})

//traer un comprador por su id//
app.get("/compradores/:id", (req, res) => {
    let { id } = req.params;
    controller.getComprador(id, res);
});

//agregar una marca//
app.post("/marcas", (req, res) => {
    let { marca } = req.body;
    controller.setMarca(marca, res);
});

//traer todas las marcas//
app.get("/marcas", (req, res)=>{
    controller.getMarcas(res);
})

//traer a una marca por si id//
app.get("/marcas/:id", (req, res) => {
    let { id } = req.params;
    controller.getMarca(id, res);
});

//agregar un color//
app.post("/colores", (req, res) => {
    let { color } = req.body;
    controller.setColor(color, res);
});

//traer todos los colores//
app.get("/colores", (req, res)=>{
    controller.getColores(res);
})

//taer un color por su id//
app.get("/colores/:id", (req, res) => {
    let { id } = req.params;
    controller.getColor(id, res);
});

//agregar un tiempo de uso//
app.post("/tiempoUsos", (req, res) => {
    let { tiempoUso } = req.body;
    controller.setTiempoUso(tiempoUso, res);
});

//traer todos los tiempos de uso//
app.get("/tiempoUsos", (req, res)=>{
    controller.getTiempousos(res);
})

//traer un tiempo uso por su id//
app.get("/tiempoUsos/:id", (req, res) => {
    let { id } = req.params;
    controller.getTiempoUso(id, res);
});

//agregar una factura//
app.post("/facturas", (req, res) => {
    let { factura } = req.body;
    controller.setFactura(factura, res);
});

//traer todas las facturas//
app.get("/facturas", (req, res)=>{
    controller.getFacturas(res);
})

//traer una factura por su id//
app.get("/facturas/:id", (req, res) => {
    let { id } = req.params;
    controller.getFactura(id, res);
});

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

app.get("/prendas/:marca/:talla", (req, res) => {
    let { marca, talla } = req.params;
    controller.findPrenda(res, marca, talla);
})

app.get("/vendedores/:pais/:calificacion", (req, res) => {
    let { pais, calificacion } = req.params;
    controller.findVendor(res, pais, calificacion);
})

app.get("/marcas/pais/:country", (req, res) => {
    let { country } = req.params;
    controller.findMarcaByCountry(res, country);
})

app.get("/tiempo_uso/:remodelar", (req, res) => {
    let { remodelar } = req.params;
    controller.findByRemodelar(res, remodelar);
})

app.get("/colores/estampado/:estampado", (req, res) => {
    let {estampado} = req.params;
    controller.findByEstampado(res, estampado);
})
exports.app = app;