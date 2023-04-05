const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs'); // Set view engine to ejs

app.get('/', function(req, res) { // Render home page
    res.render('index');
});

app.get('/account', function(req, res) { // Render account page
    res.render('account');
});

app.use(express.static(__dirname + '/public')); // CSS and JS

app.listen(port, () => console.log(`Example app listening on port ${port}!`))