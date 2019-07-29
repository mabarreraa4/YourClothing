const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PrendaSchema = new Schema ({
    TipoPrendas : String,
    Tallas : String,
    marca_id: [
        {
        type: Schema.Types.ObjectId,
        ref: "Marca"
      }
    ],
    color_id: [
        {
        type: Schema.Types.ObjectId,
        ref: "Color"
        }
    ],
    comprador_id:[
         {
        type: Schema.Types.ObjectId,
        ref: "Comprador"
        }
    ],
    vendedor_id: [
        {
        type: Schema.Types.ObjectId,
        ref: "vendedor"
        }
    ],
    tiempoUso_id: [
        {
        type: Schema.Types.ObjectId,
        ref: "TiempoUso"
         }
    ]
});

var Prenda = mongoose.model("Prenda", PrendaSchema);
module.exports = Prenda;