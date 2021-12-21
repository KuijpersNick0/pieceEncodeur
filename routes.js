let express = require('express');
let router = express.Router();

let roomController = require('./controllers/roomController');
let appartementController=require('./controllers/appartementController');

//Liste des routes vers controlleurs

router.get('/', (req, res) => res.redirect('/formulaire'));

router.get('/formulaire', roomController.formulaire);
router.post('/formulaire/add', roomController.formAdd)

router.get('/appartement', appartementController.appartementList);

module.exports = router;