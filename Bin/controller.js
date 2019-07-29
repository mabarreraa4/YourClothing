const mongoose = require("mongoose");
const User = require ("./models/User");
const Prenda = require ("./models/Prenda");
const Vendedor = require ("./models/vendedor");
const Comprador = require ("./models/Comprador");
const Color = require ("./models/Color");
const Marca = require ("./models/Marca");
const tiempoUso = require ("./models/TiempoUso");

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

    getUsers(res){
    User.find({}, (err, users)=>{
        if (err)throw err;
        res.send(users);
    })

    }

    getPrendas(res){
    Prenda.find({}, (err, prendas)=>{
        if (err)throw err;
        res.send(prendas);
    })

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
        Marca.find({nombre: marca}, (err, marcas)=>{
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

    getMarcas(res){
    Marca.find({}, (err, marcas)=>{
        if (err)throw err;
        res.send(marcas);
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
}

exports.controller = new controller()