
// Initializing
const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require('mongoose');
const Note = require('./models/Node');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




mongoose.connect("mongodb+srv://rufaeelasad:5D3A7zCNXzGgwUwi@cluster0.vj8rauc.mongodb.net/notesdb").then(() => {





    app.get('/notes/list', async (req, res) => {

        const allNotes = await Note.find();
        res.json(allNotes);
    });






    app.post('/notes/list/search', async (req, res) => {

        const specificNote = await Note.find({ userid: req.body.userid });

        res.json(specificNote);
    });

    app.post('/notes/add', async (req, res) => {


        await Note.deleteOne({ id: req.body.id });


        const addNote = new Note({
            id: req.body.id,
            userid: req.body.userid,
            tittle: req.body.tittle,
            content: req.body.content
        });

        await addNote.save();

        const response = { message: "New Note Created" };

        res.json(req.body);

    });


    app.post('/notes/delete', async (req, res) => {

       await Note.deleteOne( {id:  req.body.id} );

       const response = { message: "Note has been created"};
       res.json(response);

    });


});




// Starting the server on Port
app.listen(PORT, () => {

    console.log("Server run successfully");

});