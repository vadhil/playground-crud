const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const bodyParser = require('body-parser')
const { loadContacts, saveContacts } = require('./utils/func');
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

app.use(express.urlencoded( { extended: true } ));

// app.use(bodyParser.urlencoded({ extended: true }));


// app.use(bodyParser.json());
// app.use(express.json());



app.get('/contacts', (req, res) => {
    const contacts = loadContacts();
    console.log(contacts);
    res.render('contacts', {  
        layout: 'layout/main',
        title: 'contact',
        contacts,
    })
})
app.get('/form-contact', (req, res) => {
    res.render('form-contact', {
        layout: 'layout/main',
        title: 'form-contact',
    })
    // res.redirect('/');
})
app.post('/contacts', (req, res) => {
    console.log(req.body);
    res.send(req.body);
    // res.redirect('/contacts');
    // res.sendDate(req.body)
    // const { name, number } = req.body;
    // const testObj = {
    //     name: 'part1',
    //     noHp: '09889',
    // }
    // saveContacts(testObj);
    // console.log(req.body);
})



















app.get('', (req, res) => {
    res.render('index', {
        layout: 'layout/main',
        title: 'Home',

    });
})

app.use( (req, res) => {
    res.status(404).render('404', {
        layout: 'layout/main',
        title: '404'
    })
}
)


app.listen(port, (req, res) => {
    console.log(`listening on ${port}`);
})