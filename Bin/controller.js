const mongoose = require("mongoose");
const Prenda = require ("./models/Prenda");
const Vendedor = require ("./models/vendedor");
const Comprador = require ("./models/Comprador");
const Color = require ("./models/Color");
const Marca = require ("./models/Marca");
const tiempoUso = require ("./models/TiempoUso");
const Factura = require ("./models/Factura");

class controller {
    constructor(){
        this.connect();
    }

    async connect(){
       try{
            await mongoose.connect(
        "mongodb+srv://mpbarreraagamez4:Mapetin2017.@cluster0-lg0wp.mongodb.net/YourClothing?retryWrites=true&w=majority",
        {useNewUrlParser:true}
        );
        console.log("Conectados a la base de datos")


       } catch(e){
         console.error(e)
       }
    }

    //prendas//
    setPrenda(prenda, res){
        Prenda.create(prenda, function(err, newPrenda){
            if (err) throw err;
            res.send({ status: 200, nU: newPrenda });
        })
    }

    getPrendas(res) {
        Prenda.find({}, (err, prendas) => {
            if (err) throw err;
            res.send({ status: 200, prendas: prendas });
        });
    }

    getPrenda(id, res) {
        Prenda.find({ _id: id }, (err, prenda) => {
            if (err) throw err;
            res.send({ status: 200, prendas: prenda });
        });
    }

    updatePrenda(prenda, res) {
        let { id, TipoPrendas, Tallas } = prenda;
        Prenda.updateOne(
            { _id: id },
            { $set: { TipoPrendas: TipoPrendas, Tallas: Tallas } }
        )
            .then(rawResponse => {
                res.send({ message: "Prenda updated", raw: rawResponse });
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    deletePrenda(id, res) {
        Prenda.deleteOne({ _id: id }, function(err) {
            if (err) throw err;
            res.send({ message: "Prenda ha sido borrada" });
        });
    }

    //Marca//

    setMarca(marca, res){
        Marca.create(marca, function(err, newMarca){
            if (err) throw err;
            res.send({ status: 200, nU: newMarca });
        })
    }

    getMarcas(req, res) {
        Marca.find({}, (err, marcas) => {
            if (err) throw err;
            res.send({ allMarcas: marcas });
        });
    }

    getMarca(id, res) {
        Marca.find({ _id: id }, (err, marca) => {
            if (err) throw err;
            res.send({ Marca: marca });
        });
    }

    updateMarca(marca, res) {
        let { id, nombreMarca, pais, proveedor } = marca;
        Marca.updateOne(
            { _id: id },
            { $set: { nombreMarca: nombreMarca, pais: pais, proveedor: proveedor } }
        )
            .then(rawResponse => {
                res.send({ message: "Marca updated", raw: rawResponse });
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    deleteMarca(id, res) {
        Marca.deleteOne({ _id: id }, function(err) {
            if (err) throw err;
            res.send({ message: "Marca ha sido borrada" });
        });
    }

    //color//

    setColor(color, res){
        Color.create(color, function(err, newColor){
            if (err) throw err;
            res.send({ status: 200, nU: newColor });
        })
    }

    getColores(req, res) {
        Color.find({}, (err, colores) => {
            if (err) throw err;
            res.send({ allColores: colores });
        });
    }

    getColor(id, res) {
        Color.find({ _id: id }, (err,color) => {
            if (err) throw err;
            res.send({ Color: color });
        });
    }

    updateColor(color, res) {
        let { id, color, estampado } = marca;
        Color.updateOne(
            { _id: id },
            { $set: { color: color, estampado: estampado} }
        )
            .then(rawResponse => {
                res.send({ message: "Color updated", raw: rawResponse });
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    deleteColor(id, res) {
        Color.deleteOne({ _id: id }, function(err) {
            if (err) throw err;
            res.send({ message: "Color ha sido borrado" });
        });
    }

    //TiempoUso//
    setTiempoUso(tiempoUso, res){
        TiempoUso.create(tiempoUso, function(err, newTiempoUso){
            if (err) throw err;
            res.send({ status: 200, nU: newTiempoUso });
        })
    }

    getTiempoUsos(req, res) {
        TiempoUso.find({}, (err, TiempoUsos) => {
            if (err) throw err;
            res.send({ allTiempoUsos: TiempoUsos });
        });
    }

    getTiempoUso(id, res) {
        TiempoUso.find({ _id: id }, (err,tiempoUso) => {
            if (err) throw err;
            res.send({ TiempoUso: tiempouso });
        });
    }

    updateTiempoUso(tiempoUso, res) {
        let { id, dias_uso, remodelar, arreglar } = tiempoUso;
        TiempoUso.updateOne(
            { _id: id },
            { $set: { dias_uso: dias_uso, remodelar: remodelar, arreglar: arreglar} })
            .then(rawResponse => {
                res.send({ message: "TiempoUso updated", raw: rawResponse });
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    deleteTiempoUso(id, res) {
        TiempoUso.deleteOne({ _id: id }, function(err) {
            if (err) throw err;
            res.send({ message: "TiempoUso ha sido borrado" });
        });
    }

    //comprador//
    setComprador(comprador, res){
        Comprador.create(comprador, function(err, newComprador){
            if (err) throw err;
            res.send({ status: 200, nU: newComprador });
        })
    }

    getCompradores(req, res) {
        Comprador.find({}, (err, Compradores) => {
            if (err) throw err;
            res.send({ allCompradores: Compradores });
        });
    }

    getComprador(id, res) {
        Comprador.find({ _id: id }, (err,comprador) => {
            if (err) throw err;
            res.send({ Comprador: comprador});
        });
    }

    updateComprador(comprador, res) {
        let { id, nombre1, nombre2, apellido1, apellido2, identificacion, pais, direccion, telefono, calificacion } = comprador;
        Comprador.updateOne(
            { _id: id },
            { $set: { nombre1: nombre1, nombre2: nombre2, apellido1: apellido1, apellido2: apellido2, identificacion: identificacion,
             pais: pais, direccion: direccion, telefono: telefono, calificacion: calificacion} })
            .then(rawResponse => {
                res.send({ message: "Comprador updated", raw: rawResponse });
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    deleteComprador(id, res) {
        Comprador.deleteOne({ _id: id }, function(err) {
            if (err) throw err;
            res.send({ message: "Comprador ha sido borrado" });
        });
    }

    //vendedor//
    setVendedor(vendedor, res){
        Vendedor.create(vendedor, function(err, newVendedor){
            if (err) throw err;
            res.send({ status: 200, nU: newVendedor });
        })
    }

    getVendedores(req, res) {
        Vendedor.find({}, (err, Vendedores) => {
            if (err) throw err;
            res.send({ allVendedores: Vendedores });
        });
    }

    getVendedor(id, res) {
        Vendedor.find({ _id: id }, (err,vendedor) => {
            if (err) throw err;
            res.send({ Vendedor: vendedor});
        });
    }

    updateVendedor(vendedor, res) {
        let { id, nombre1, nombre2, apellido1, apellido2, identificacion, pais, direccion, telefono, calificacion } = comprador;
        Vendedor.updateOne(
            { _id: id },
            { $set: { nombre1: nombre1, nombre2: nombre2, apellido1: apellido1, apellido2: apellido2, identificacion: identificacion,
             pais: pais, direccion: direccion, telefono: telefono, calificacion: calificacion} })
            .then(rawResponse => {
                res.send({ message: "Vendedor updated", raw: rawResponse });
            })
            .catch(err => {
                if (err) throw err;
            });
    }

    deleteComprador(id, res) {
        Comprador.deleteOne({ _id: id }, function(err) {
            if (err) throw err;
            res.send({ message: "Comprador ha sido borrado" });
        });
    }





     getPrendasByTalla(talla, prenda,  res){
        Prenda.find({ Tallas: talla, TipoPrendas: prenda }, (err, prendas)=>{
            if (err)throw err;
            res.send(prendas);
        })
    }

     getPrendasByMarca(marca, prenda,  res){
        Prenda.find({ TipoPrendas: prenda }, (err, prendas)=>{
            if (err)throw err;
            res.send(prendas);
        })
        Marca.find({nombre: marca}, (err, marca)=>{
            if (err) throw err;
            res.send(marca);
        })
    }

    getVendedores(res){
    Vendedor.find({}, (err, vendedores)=>{
        if (err)throw err;
        res.send(vendedores);
    })

    }

    getCompradores(res){
    Comprador.find({}, (err, compradores)=>{
        if (err)throw err;
        res.send(compradores);
    })

    }

    getColores(res){
    Color.find({}, (err, colores)=>{
        if (err)throw err;
        res.send(colores);
    })

    }

     gettiempo_usos(res){
     tiempoUso.find({}, (err, tiempoUsos)=>{
            if (err)throw err;
            res.send(tiempoUsos);
        })

     }

    getFacturas(res){
    Factura.find({}, (err, facturas)=>{
         if (err)throw err;
         res.send(facturas);
    })

    }



    postPrenda(prenda, res){
        const Prendas = new Prenda({
            TipoPrendas: prenda.prenda,
            Tallas: prenda.talla
        })
        Prendas.save(function(err, prendas){
            if (err) throw rrr;
            res.send(prendas)
        })
    }

     postVendedor(vendedor, res){
        const Vendedores = new vendedor({
            nombre1: vendedor.nombre1,
            nombre2: vendedor.nombre2,
            apellido1: vendedor.apellido1,
            apellido2: vendedor.apellido2,
            identificacion: vendedor.identificacion,
            pais: vendedor.pais,
            ciudad: vendedor.ciudad,
            telefono: vendedor.telefono,
        })
        Vendedores.save(function(err, vendedores){
            if (err) throw rrr;
            res.send(vendedores)
        })
    }

     postComprador(comprador, res){
        const Compradores = new comprador({
            nombre1: comprador.nombre1,
            nombre2: comprador.nombre2,
            apellido1: comprador.apellido1,
            apellido2: comprador.apellido2,
            identificacion: comprador.identificacion,
            pais: comprador.pais,
            direccion: comprador.direccion,
            telefono: comprador.telefono,
            calificacion: comprador.calificacion,
        })
        Compradores.save(function(err, compradores){
            if (err) throw rrr;
            res.send(compradores)
        })
    }

       postMarca(marca, res){
        const Marcas = new marca({
           nombre: marca.nombre,
           pais: marca.pais,
           proveedor: marca.proveedor,
        })
        Marcas.save(function(err, marcas){
            if (err) throw rrr;
            res.send(marcas)
        })
    }

     postColor(color, res){
        const Colores = new Color({
             color: color.color,
             estampado: color.estampado,
        })

        Colores.save(function(err, colores){
            if (err) throw rrr;
            res.send(colores)
        })

    }

    postTiempo_uso(tiempo_uso, res){
        const Tiempo_usos = new Tiempo_uso({
             dias_uso: tiempo_uso.dias_uso,
             remodelar: tiempo_uso.remodelar,
             arreglar: tiempo_uso.arreglar,
        })

        Tiempo_usos.save(function(err, Tiempo_usos){
            if (err) throw rrr;
            res.send(Tiempo_usos)
        })

    }
    findPrenda(res, marca, talla) {
        Marca.find({
            nombreMarca: marca
        }, (err, result) => {
            if (err) throw err;
            Prenda.find({
                $and: [
                    {
                        marca_id: result[0]._id
                    },
                    {
                        Tallas: talla
                    }
                ]
            })
            .populate({
                path: "marca_id",
                select: "nombreMarca pais proveedor"
            })
            .exec((err, result) => {
                if (err) throw err;
                res.send(result)
            })
        })
    }
    findVendor(res, pais, calificacion) {
        Vendedor.find({
            $and: [
                {
                    pais: pais
                },
                {
                    calificacion: calificacion
                }
            ]
        }, (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    }
    findMarcaByCountry(res, country) {
        Marca.find({
            pais: country
        }, (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    }
    findByRemodelar(res, remodelar) {
        tiempoUso.find({
            remodelar: remodelar
        }, (err, result) => {
            if (err) throw err;
            var diasUso = []
            for (let i = 0; i < result.length; i++) {
                let el = result[i].dias_uso
                diasUso.push(el)
            }
            res.send(diasUso)
        })
    }
    findByEstampado(res, estampado) {
        Color.find({
            estampado: estampado
        }, (err, result) => {
            if (err) throw err;
            var colors = []
            for (let i = 0; i < result.length; i++) {
                let el = result[i].color
                colors.push(el)
            }
            res.send(colors)
        })
    }
}

exports.controller = new controller()