var express = require('express');
var router = express.Router();
const pool = require('../database');

const {mixto,femenil,sub19,Historica,Jugadores,Equipos,actual,inicio, buscarid,id,idequipo,buscarequipo} = require('../controllers/index')

router.route('/')
  .get(inicio)
  
router.route('/Mixta')
  .get(mixto)
  
router.route('/femenil')
  .get(femenil)

  router.route('/sub19')
  .get(sub19)

  router.route('/Historica')
  .get(Historica)

  router.route('/Jugadores')
  .get(Jugadores)

  router.route('/Equipos')
  .get(Equipos)

  router.route('/2020')
  .get(actual)

//// buscar jugador

router.route('/id')
  .get(id)

  router.route('/buscarid')
  .get(buscarid)

//// buscar equipo

  router.route('/equipo')
  .get(idequipo)

  router.route('/buscarequipo')
  .get(buscarequipo)


module.exports = router;