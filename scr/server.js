
// Initializing
const express = require("express");
const app = express();
// const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose');
const Note = require('./models/Node');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




mongoose.connect("mongodb+srv://rufaeelasad:5D3A7zCNXzGgwUwi@cluster0.vj8rauc.mongodb.net/notesdb").then(() => {


    // for home page
    app.get('/', (req, res) => {

        const response = { message: "THis is home Page" };
        res.json(response);

    });



    // show all list api
    app.get('/notes/list', async (req, res) => {

        const allNotes = await Note.find();
        res.json(allNotes);
    });






    // search specific note
    app.post('/notes/list/search', async (req, res) => {

        const specificNote = await Note.find({ userid: req.body.userid });

        res.json(specificNote);
    });



    // adding a new note api
    app.post('/notes/add', async (req, res) => {


        await Note.deleteOne({ userid: req.body.userid });


        const addNote = new Note({

            userid: req.body.userid,
            tittle: req.body.tittle,
            content: req.body.content
        });

        await addNote.save();

        const response = { message: "New Note Created" };

        res.json(response);

    });

    
    // delete api
    app.post('/notes/delete', async (req, res) => {

        await Note.deleteOne({ userid: req.body.userid });

        const response = { message: "Note has been deleted" };
        res.json(response);

    });


});




// Starting the server on Port
app.listen(4000, () => {

    console.log("Server run successfully");

});