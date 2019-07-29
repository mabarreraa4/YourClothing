const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ColorSchema = new Schema ({
    color: String,
    estampado: String,
    prenda_id: [
        {
            type: Schema.Types.ObjectId,
            ref: "Prenda"
        }
    ]
});

var Color = mongoose.model("Colores", ColorSchema);
module.exports = Color;