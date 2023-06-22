import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({  
    title: { type: String, required: true },  
    description: String,  
    releaseYear: Number,  
    genre: { type: String, required: true },
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;