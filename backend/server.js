const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors());

const { Client } = require('pg')
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    password: 'vote',
    database: 'MangaShop'
  })
client.connect();

app.get('/api/test', (req, res) => {
    res.json({message: 'MangaShop'});
});

app.post('/api/login', async(req,res) => {
    const user = req.body.user;
    if(user.username =="" || user.password == ""){
        res.status(404).json({message: 'Empty fields'});
        return
    }
    const sql = "SELECT * FROM public.user WHERE username = $1 and password = $2";
    const result = await client.query({
        text: sql,
        values: [user.username, user.password]
    })
    if(result.rows.length == 0){
        res.status(404).json({message: 'This user doesnt exist'});
        return
    }
    //send if admin or user
    res.json({message: 'Welcome'});
    
})

const port = process.env.PORT || 3080;
app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});