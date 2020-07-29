const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    cedula: Number,
    nombre: String,
    telefono: Number,
    sexo: String,
    nivel: String,
    edad: Number,
    clase: String,
    peso: Number,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('students',studentSchema);