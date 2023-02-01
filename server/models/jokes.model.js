const {Schema, model} = require('mongoose');

const jokeSchema = new Schema({
    setup:{
        type: String,
        required: [true, 'Debe ingresar un setup'],
        minlength: [10, 'No puede tener menos de 10 caracteres']
    },
    punchline:{
        type: String,
        required: [true, 'Debe ingresar un punchline'],
        minlength: [3, 'No puede tener menos de 3 caracteres']
    }
}, {timestamps: true});

const Joke = model('Joke', jokeSchema)
module.exports = Joke;