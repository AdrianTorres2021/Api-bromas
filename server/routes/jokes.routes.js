const { sayHi, createJoke, showAllTheJokes, getOneJoke, deleteJoke, updateJoke, randomJoke } = require("../controllers/jokes.controller");


module.exports = (app) => {
    app.get("/api/jokes", showAllTheJokes );
    app.get("/api/jokes/random", randomJoke); //Este tiene que ir antes del que tiene :_id para evitar que lea la otra ruta antes
    app.get("/api/jokes/:_id", getOneJoke);
    app.post("/api/jokes/new", createJoke);
    app.put("/api/jokes/update/:_id", updateJoke);
    app.delete("/api/jokes/delete/:_id", deleteJoke);
}