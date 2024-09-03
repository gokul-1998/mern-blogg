const allowed_origins = [
    'http://localhost:3000',
    'https://aswinblog.netlify.app',
    'http://localhost:5173',
    'http://localhost:*',
    'https://xamprepp.netlify.app/',
    /https:\/\/deploy-preview-\d+--xamprepp\.netlify\.app/,
    /http:\/\/localhost:\d+/    

];

export default allowed_origins;

