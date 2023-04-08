const express = require('express');

const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
// const { loadContact, findContact, addContact } = require('./utils/contacts');
const port = 3000;
const app = express();


app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.json());


app.get('/contacts', (req, res) => {
    res.render('contacts', {
        layout: 'layout/main',
        title: 'contact',
    })
})
app.get('/form-contact', (req, res) => {
    res.render('form-contact', {
        layout: 'layout/main',
        title: 'form-contact',
    })
})



















app.get('/index', (req, res) => {
    res.render('index', {
        layout: 'layout/main',
        title: 'index',

    });
})

app.use('', (req, res) => {
    res.status(404).render('404', {
        layout: 'layout/main',
        title: '404'
    })
}
)


app.listen(port, (req, res) => {
    console.log(`listening on ${port}`);
})