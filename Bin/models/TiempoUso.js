const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TiempoUsoSchema = new Schema ({
    dias_uso: String,
    remodelar: String,
    arreglar: String,
    prenda_id: [
        {
            type: Schema.Types.ObjectId,
            ref: "Prenda"
        }
    ]
});

var tiempoUso = mongoose.model("tiempoUso", TiempoUsoSchema);
module.exports = tiempoUso;