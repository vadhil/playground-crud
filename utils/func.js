const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('public'));


const dirPath = '../data';
const dataPath = "../data/contacts.json";

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}
if ( !fs.existsSync(dataPath) ) {
    fs.writeFileSync(dataPath, "[]", 'utf8');
}


const siswa = {
    nama: 'fakhri',
    noHp: '08123456789',
    email: 'fakhri@example.com'
}
const siswa1 = {
    nama: 'reza',
    noHp: '08123456789',
    email: 'reza@example.com'
}
//basic 
// const file = fs.readFileSync(dataPath, 'utf8');
// console.log(file);
// const filenot = JSON.parse(file)
// console.log(filenot);
// filenot.push(siswa);
// fs.writeFileSync(dataPath, JSON.stringify(filenot));

const loadContacts = () => {
  const fileBuffer = fs.readFileSync(dataPath, 'utf8');
  const contacts = JSON.parse(fileBuffer); 
  return contacts;
}


const saveContacts = (data) => {
    const contacts = loadContacts();
    contacts.push(data);
    fs.writeFileSync(dataPath, JSON.stringify(contacts), 'utf8');
    // fs.close();   
}





module.exports = { loadContacts, saveContacts}


// const loadContact = (contactss) =>{
//     const fileBuffer = fs.readFileSync(dataPath, 'utf8');
//     const contacts = JSON.parse(fileBuffer);
//     // return contacts;
// }

// const findContact = (name) =>{
//     const contacts = loadContact();
//     const contact = contacts.find( (contact) => contact.name === name)
//     return contact;
// };

// const saveContact = (contacts) => {
//     fs.writeFileSync('./data/contact.json', JSON.stringify(contacts))
// }









// const filebuffer = fs.readFileSync(dataPath, "utf8" );
// console.log(typeof(filebuffer), filebuffer);
// const file = JSON.parse(filebuffer);
// console.log(typeof(filebuffer), filebuffer);
// const data = file.push(siswa);
// fs.writeFileSync(dataPath, JSON.stringify(data));
// console.log(data);




// const loadContact = () =>{
//     const jsonbuffer = fs.readFileSync('../data/contacts.json');
//     return JSON.parse(jsonbuffer);
// }

// const saveContact = (data) =>{
//   return fs.writeFileSync(dataPath, JSON.stringify(data), 'utf8');
// }


// const listSiswa = loadContact();
// console.log(listSiswa, typeof(listSiswa));

// JSON.stringify(listSiswa);
// console.log(listSiswa, typeof(listSiswa));

//

// fs.writeFileSync(dataPath, "[]", 'utf8');

// const listSiswa = loadContact();
// console.log(listSiswa);
// const data1 =listSiswa.push(siswa)

// saveContact(data1);



