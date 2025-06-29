import allowed_origins from './allowed_origins.js';

const corsOptions = {
    origin: (origin, callback) => {
        if (allowed_origins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

export default corsOptions;