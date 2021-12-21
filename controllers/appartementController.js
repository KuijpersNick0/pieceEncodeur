const { response } = require('express');
let connection = require('../db');

let Room = require('../models/roomModel');
let roomList = []

exports.appartementList = function(request, response){
    //affiche la liste des pieces
    connection.query("SELECT * from room;", function(error, resultSQL){
        if (error){
            console.log(error);
        } 
        for (var i=0; i<resultSQL.length; i++){
            let room = new Room(resultSQL[i].name,resultSQL[i].length,resultSQL[i].width);
            roomList.push(room);
        }
        
        response.render('home.ejs', {piece :resultSQL}); 
    });
};