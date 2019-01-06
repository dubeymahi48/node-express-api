const {Note} = require('../models/Note');
const mongoose = require('mongoose');

module.exports = {
    getNote : function(req, res){
       //get note
       Note.findById(req.params.id, (err,doc)=>{
           if(err)
           res.status(404).send({error:'unable to fetch note.'});
           let response = {
            message:"Note data",
            data:doc,
        };
        res.send(response);
       });
    },
    getNotes : function(req, res){
       // get all notes
        Note.find({}, (err, doc)=>{
            if(err)
            res.status(404).send({error:'unable to fetch notes.'});
            let response = {
                message:"Note list",
                data:doc,
            };
            res.send(response);
        });
    },
    postNote : function(req, res){
       //add new note
       const note = new Note({
            title: req.body.title,
            description: req.body.description,
            status:1
        });
        note.save().then((doc) => {
            let response = {
                message:"Notes added successfully",
                data:doc,
            };
            res.send(response);
        },(err)=>{
            res.status(404).send({error:'Unable to save note data.'});
        });
    },
    updateNote : function(req, res){
        //update note
        Note.findByIdAndUpdate(req.params.id, { 
            title: req.body.title,
            description: req.body.description,
        }, {new: true}, (err,doc)=>{
            if(err)
            res.status(404).send({error:'Unable to update note data.'});
            let response = {
                message:"Note updated successfully",
                data:doc,
            };
            res.send(response);

        })

    },
    deleteNote : function(req, res){
        //delete note
        Note.findByIdAndDelete(req.params.id, (err,doc)=>{
            if(err)
                res.status(404).send({error:"Unable to delete note."});
            let response = {
                message: "note successfully deleted",
                data: doc
            };
            return res.send(response);
        })
    },
}