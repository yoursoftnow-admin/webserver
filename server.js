const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'))
    //Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'emilio torrez'
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

// app.get('/', (req, res) => {
//     // res.send('Hola mundo')
//     let salida = {
//         nombre: 'Emiliano',
//         edad: 27,
//         url: req.url
//     }
//     res.send(salida);
// })



app.listen(port, () => {
    console.log(`Escuchando pediciones en el puerto ${ port }`);
})

// console.log(app);