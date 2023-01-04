// קובץ הגדרות והעלאת השרת
const express = require('express');
const app = express();

// cors - security
app.use(require('cors')()) // import and call func

// for json-objects 
app.use(express.json())

//         קיבוע התיקייה        ניתוב             
app.use('/uploads',express.static('uploads'))

app.use('/files', require('./Routers/files.route'))


app.listen(7777, () => { console.log("***** Server up ******"); })

