const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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

var cart = [];      //cart backend side
var hasItem = false;      //numberArticle in the cart

app.get('/api/count', (req, res) => {
    res.json({ hasItem: hasItem });
});

app.post('/api/login', async (req, res) => {
    const user = req.body.user;
    if (user.username == "" || user.password == "") {
        res.status(404).json({ message: 'Empty fields' });
        return
    }

    const sql = "SELECT * FROM utilisateur WHERE username = $1";
    const result = await client.query({
        text: sql,
        values: [user.username]
    })
    if (result.rows.length == 0) {
        res.status(404).json({ message: 'This user doesnt exist' });
        return
    };
    const passwordHash = result.rows[0].password;
    const isAdmin = result.rows[0].isadmin;
    if (await bcrypt.compare(user.password, passwordHash)) {
        const token = jwt.sign({ log: true, admin: isAdmin }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' });
        res.json({
            message: 'Bienvenue ',
            token: token
        })
        console.log("Authentification réussie")
    }
    else {
        res.status(404).json({ message: 'Bad password' });
        return
    }


})

app.post('/api/register', async (req, res) => {
    const newUser = req.body.newUser;
    if (newUser.username == "" || newUser.password == "") {
        res.status(404).json({ message: 'Empty fields' });
        return
    }
    const sql = "SELECT * FROM utilisateur WHERE username = $1";
    const result = await client.query({
        text: sql,
        values: [newUser.username]
    })
    if (result.rows.length >= 1) {
        res.status(404).json({ message: 'This user already exists' });
        return
    }
    const passwordHash = await bcrypt.hash(newUser.password, 10)
    const sql2 = "INSERT INTO utilisateur (username,password,isadmin) VALUES ($1,$2,$3)";
    const result2 = await client.query({
        text: sql2,
        values: [newUser.username, passwordHash, false]
    })
    res.json({ message: 'Welcome' });
})

app.get('/api/cart', (req, res) => {
    res.json({ cart: cart });
})

app.post('/api/cart/addItem', (req, res) => {
    const item = req.body.item;
    const id = cart.findIndex(i => i.idManga === item.idManga);
    if (id == -1) {
        cart.push(item);
    }
    else {
        cart[id].quantity += 1;
    }
    hasItem = true;
    res.json({ message: "Item added to the cart" });

})

app.put('/api/cart/deleteItem', (req, res) => {
    const item = req.body.item;
    const id = cart.findIndex(i => i.idManga === item.idManga);
    if (cart[id].quantity == 1) {
        cart.splice(id, 1);
    }
    else {
        cart[id].quantity -= 1;
    }
    res.json({ message: "Item deleted from the cart" });
})

app.delete('/api/cart/clearCart', (req, res) => {
    cart = [];
    hasItem = false;
    res.json({ message: "Cart is cleared" });
})

//Display all manga on product page
app.get('/api/mangas', async (req, res) => {
    const aff = await client.query({
        text: 'SELECT *  FROM mangas',
    });
    const mangas = aff.rows;
    res.json({ mangas: mangas });
})
app.post('/api/mangas/singlemanga', async (req, res) => {
    const idManga = req.body.idmanga
    const aff = await client.query({
        text: 'SELECT * FROM mangas where "idManga" = $1',
        values: [idManga]
    })
    const manga = aff.rows[0]
    res.json(manga)
})
const port = process.env.PORT || 3080;
app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});