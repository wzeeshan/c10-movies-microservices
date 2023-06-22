import express from "express";

const Router = express.Router();

Router.route("/movies")
  .get(function (req, res) {
    res.send("request to Get all movies");
  })
  .post(function (req, res) {
    res.send("request to CREATE new movie");
  });

  Router.route('/movies/:id').get(function(req, res){
    res.send('request to get a specific movie id' + req.params.id);
  });

  export default Router;
