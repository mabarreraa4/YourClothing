const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FacturaSchema = new Schema ({
    NoFactura: String,
    TotalVenta: String,
    prenda_id: [
        {
            type: Schema.Types.ObjectId,
            ref: "Prenda"
        }
    ],
    comprador_id:[
         {
        type: Schema.Types.ObjectId,
        ref: "Comprador"
        }
    ],
});

var Factura = mongoose.model("Factura", FacturaSchema);
module.exports = Factura;