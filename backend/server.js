const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/test', (req, res) => {
    res.json({message: 'MangaShop'});
});


const port = process.env.PORT || 3080;
app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});