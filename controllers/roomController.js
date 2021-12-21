const { response } = require('express');
let Room = require('../models/roomModel');
let connection = require('../db');

let listeRoom = [];

exports.formulaire = function(request, response){
    //affiche form
    response.render('form.ejs');
};

exports.formAdd = function(req, response){
    let name = req.body.piece;
    let length = req.body.largeur;
    let width = req.body.longueur;
    console.log(name);
    let room = new Room(name,length,width);
    listeRoom.push(room);

    const sqlInsert = "INSERT INTO room(name,length,width) VALUES (?,?,?)";
    let todo = [name, length, width];
    connection.query(sqlInsert, todo, function(err, result){
        if (err) throw err;
        console.log("ajout bdd");
    });
    response.redirect('/appartement');
}
