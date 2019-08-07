const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MarcaSchema = new Schema ({
    nombreMarca: String,
    pais: String,
    proveedor: String,
});

var Marca = mongoose.model("Marca", MarcaSchema);
module.exports = Marca;
