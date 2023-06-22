import mongoose from 'mongoose';

function connect() {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    };

    return mongoose.connect(
        // we need to move this to the environment
        'mongodb://mongo:27017/lloyds-movies-microservice',
        options
    );
}

export default {
    connect,
};