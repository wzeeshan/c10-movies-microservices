import express from "express";
import moviesController from "./controllers/moviesController.js";

const Router = express.Router();

Router.route("/movies")
    .get(moviesController.getAllMovies)
    .post(moviesController.createMovie);

    //OLD
 //   .get(function (req, res) {
 //   res.send("request to Get all movies");
 //})
 // .post(function (req, res) {
  //  res.send("request to CREATE new movie");
  //});

//Old
  //Router.route('/movies/:id').get(function(req, res){
    // res.send('request to get a specific movie id' + req.params.id);
   //});

   Router.route('movies/:Id')
   .get(moviesController.getAllMovies)
   .put(moviesController.updateMovie)
   .delete(moviesController.deleteMovie)


  export default Router;
