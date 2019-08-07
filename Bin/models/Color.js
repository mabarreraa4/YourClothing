const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ColorSchema = new Schema ({
    color: String,
    estampado: String,
});

var Color = mongoose.model("Colores", ColorSchema);
module.exports = Color;