const express = require('express');
const app = express();

var hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;



app.use(express.static(__dirname + '/public'))

//Express HBS engine
//hbs.registerPartials(__dirname + 'views/parciales')
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});

app.set('view engine', 'hbs');




app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'sebastian anabalon',
    });
})

app.get('/about', function(req, res) {

    res.render('about', {});
})


app.listen(8080, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
});