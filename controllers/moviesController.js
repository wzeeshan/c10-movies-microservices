import Movie from '../models/movie.js'

const getAllMovies = async ( req, res, next) => {
    try {
        const movies = await Movie.find();
        return res.this.status(200).json(movies);
    } catch (err) {
        next(err)
    }
    //return res.send('request to GET all movies');
};

const createMovie = async ( req, res, next) => {
    try{
        const newMovie = await Movie.create(req.body);
        return res.status(201).send(newMovie);
    } catch (err) {
        next(err);
    }
    //return res.send('request to CREATE new movie');
};

const getMovie = async (req, res, next) => {
    //return res.send('request to Get movie by ID');
    try{
        const movie = await Movie.findById(req.params.id);
        return res.status(200).send(movie);
    } catch (err) {
        next(err);
    }
};

const updateMovie = async (_req, res, next) => {
    //  return res.send('request to PUT movie by ID');
    const { id } = req.params;
    const { body } = req;
    try{
        const movie = await Movie.findById(id);
        movie.set(body);
        const savedMovie = movie.save();
        return res.status(200).json(savedMovie);
    } catch (err){
        next(err);
    }

};

const deleteMovie = async (req, res, next) => {
    //return res.send('request to DELETE movie by ID');
    const {id} = req.params;
    try {
        const movie = await Movie.findByIdAndDelete(id);
        return res.status(200).send(movie);
    } catch (err){
        next(err);
    }
}

export default {
    getAllMovies,
    createMovie,
    getMovie,
    updateMovie,
    deleteMovie



};