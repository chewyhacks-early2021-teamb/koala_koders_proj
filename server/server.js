const app = require('./app');

const port = process.env.PORT || 8080;
//start server on port 8080
app.listen(port, () => {
    console.log( `server running http://localhost:${ port }` );
    console.log( `press CTRL+C to stop server` );
})