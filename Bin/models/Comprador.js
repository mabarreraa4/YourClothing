const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompradorSchema = new Schema ({
      nombre1: String,
      nombre2: String,
      apellido1: String,
      apellido2: String,
      identificacion: String,
      pais: String,
      direccion: String,
      telefono: String,
      calificacion: String,
      prenda_id: [
        {
            type: Schema.Types.ObjectId,
            ref: "Prenda"
        }
    ]
});

var Comprador = mongoose.model("Compradores", CompradorSchema);
module.exports = Comprador;