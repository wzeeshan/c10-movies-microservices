const getAllMovies = ( req, res, next) => {
    return res.send('request to GET all movies');
};

const createMovie = ( req, res, next) => {
    return res.send('request to CREATE new movie');
};

const getMovie = (req, res, next) => {
    return res.send('request to Get movie by ID');
}

const updateMovie = (_req, res, next) => {
      return res.send('request to PUT movie by ID');
};

const deleteMovie = (req, res, next) => {
    return res.send('request to DELETE movie by ID');
}

export default {
    getAllMovies,
    createMovie,
    getMovie,
    updateMovie,
    deleteMovie



};