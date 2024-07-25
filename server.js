import express from 'express';
import {fileURLToPath} from 'url'
import {dirname} from "path"

//ENVIRONMENT
const PORT = process.env.PORT
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

//Middleware
app.use(express.static('react-app/build'))

//Serve index.html for all other get requests
app.get('*', (req, res) => {
    const filePath = __dirname + '/react-app/build/index.html'
    res.sendFile(filePath)
});

//Listen for requests
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})