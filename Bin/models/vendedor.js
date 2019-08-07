const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendedorSchema = new Schema ({
      nombre1: String,
      nombre2: String,
      apellido1: String,
      apellido2: String,
      identificacion: String,
      calificacion: String,
      pais: String,
      ciudad: String,
      telefono: String,
      prenda_id: [
        {
            type: Schema.Types.ObjectId,
            ref: "Prenda"
        }
    ]

});

var Vendedor = mongoose.model("Vendedores", VendedorSchema);
module.exports = Vendedor;