const Joke = require("../models/jokes.model");



module.exports.createJoke = async (req, res) => {
    try{console.log(req.body);
      const { body } = req;
      const newJoke = await Joke.create(body);
      console.log(newJoke);
      res.json({
          message: 'Se ha creado de manera exitosa la nueva broma',
          newJoke
      });
    }catch(err){
      console.log(err);
      res.status(500).json({
        error: err,
        message: 'Ups, no hemos podido crear la broma'
      })
    }
  }
module.exports.showAllTheJokes= async (req, res) => {
    try{
      const fullListOfJokes = await Joke.find()
      console.log(fullListOfJokes);
      res.json({
        list: fullListOfJokes
      })
    }catch(err){
      res.status(500).json({
        error: err,
        message: 'Ups, no hemos podido traer todas las bromas'
      })
    }
  }
  module.exports.randomJoke= async (req, res) => {
    try{
      const fullListOfJokes = await Joke.find()
      let random = fullListOfJokes[Math.floor(Math.random()*fullListOfJokes.length)];;
      console.log(random, "lista random");
      res.json({
        list: random
      })
    }catch(err){
      res.status(500).json({
        error: err,
        message: 'Ups, no hemos podido traer la broma random'
      })
    }
  }
  module.exports.getOneJoke= async (req, res) => {
    try{
        const { params } = req;
        console.log(params._id);
    const oneJoke = await Joke.find({_id: params._id })
    res.json({
        message: "Se ha traido una sola broma exitosamente",
        Joke: oneJoke
    })
    }catch(err){
        res.status(500).json({
            error: err,
            message: 'Ups, no hemos podido traer la broma'
    })
    }
    
  }
  module.exports.deleteJoke= async (req, res) => {
    try{
        const { params } = req;
        console.log(params._id);
    const deleteJoke = await Joke.deleteOne({_id: params._id })
    const fullListOfJokes = await Joke.find()
    res.json({
        message: "Se ha borrado la broma de manera exitosa",
        deleteJoke,
        list: fullListOfJokes
    })
    }catch(err){
        res.status(500).json({
            error: err,
            message: 'Ups, no hemos podido borrar la broma'
    })
    }
    
  }

  module.exports.updateJoke = async (req, res) => {
    try{
      const { body, params } = req;
        const updateJokes = await Joke.findOneAndUpdate(
          {_id: params._id},
          body,
          {new: true}
        )
        res.json({
        message: "Se ha modificado la broma exitosamente",
        updateJokes,
    })
    }catch(err){
      res.status(500)({
        error: err,
        message: 'Ups, no hemos podido actualizar la broma'
      })
    }
  }
  
  