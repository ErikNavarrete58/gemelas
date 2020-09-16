const pool = require('../database');


const categorias = {};

categorias.inicio = (req, res) => { res.render('index');}


categorias.mixto = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `G_general_mixto_a20`");
    const categoria = 'Gemelas Mixto C20'
    const goleo = {}
    const jornadas = await pool.query("SELECT * FROM `g_jor_mix_c20` ORDER BY `Jornada` DESC");
    const Equipos = await pool.query("SELECT * FROM `g_jor_mix_c20` ORDER BY `Equipolc` DESC , `Jornada` DESC ");
       
    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

categorias.femenil = async (req, res) => { 
    const vistas = await pool.query("SELECT * FROM `G_Generalfeme_a20`");
    const categoria = 'Gemelas Femenil'
    const goleo = {}
    const jornadas = await pool.query("SELECT * FROM `G_jor_feme_a20` ORDER BY `Jornada` DESC");
    const Equipos = await pool.query("SELECT * FROM `G_jor_feme_a20` ORDER BY `Equipolc` DESC , `Jornada` DESC ");
       
    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});}

categorias.sub19 = async (req, res) => { 
        const vistas = await pool.query("SELECT * FROM `G_general_sub19_a20`");
        const categoria = 'Gemelas Sub-19'
        const goleo = {}
        const jornadas = await pool.query("SELECT * FROM `G_jor_sub19_A20` ORDER BY `Jornada` DESC");
        const Equipos = await pool.query("SELECT * FROM `G_jor_sub19_A20` ORDER BY `Equipolc` DESC , `Jornada` DESC ");
       
        res.render('tablas/principal',{vistas,categoria,jornadas,Equipos,goleo});}
    

categorias.Historica = async (req, res) => {

    const vistas = await pool.query("SELECT * FROM `g_historica_c20`");
    const categoria = 'Historica Gemelas'
    const goleo = {}
    const jornadas = {}
    const Equipos = {}
   
    res.render('tablas/principal',{vistas,categoria,goleo,jornadas,Equipos});

}

categorias.Jugadores = (req, res) =>  {
    const categoria = 'id'
    const buscar = 'buscarid'

    res.render('id/forbuscar',{categoria,buscar});

}

categorias.Equipos = (req, res) =>  {
    const categoria = 'equipo'
    const buscar = 'buscarequipo'

    res.render('id/forbuscar',{categoria,buscar});

}

categorias.actual = (req, res) => { res.send('Actual   ');}

///buscar jugadore
categorias.id = async (req, res) => { 
    var id = req.query.id;   
const registro = await pool.query("Select * From `Registro Global Heroes` WHERE ID_FB = ?" , [id])

console.log(id)
console.log(registro)

    res.render('id/jugadores/id',{registro});
}

categorias.buscarid = async (req, res) => { 
    var id = req.query.id;   
    var idv = "%"+ id + "%";
 
    const registro = await pool.query("SELECT * FROM `Registro Global Heroes` WHERE `Nombres` LIKE ?",[idv])
    console.log(registro)
res.render('id/jugadores/buscarid',{registro,id})}

///buscar equipos
categorias.buscarequipo = async (req, res) => { 
    var id = req.query.id;   
    var idv = "%"+ id + "%";
 
    const registro =  await pool.query("SELECT * FROM `Registros Global Equipo Heroes` WHERE `Nombre_Equipo` LIKE ?" , [idv])
console.log(registro)
res.render('id/equipos/buscarequipos',{registro,id})}

categorias.idequipo = async (req, res) => { 
    var id = req.query.id;   
    const Globales = await pool.query("Select * From `g_historica_c20` WHERE ID = ?" , [id])
    const registro = await pool.query("Select * From `Registros Global Equipo Heroes` WHERE Id_plantel = ?" , [id])
    const Globalesfeme = await pool.query("Select * From `G_Generalfeme_a20` WHERE ID = ?" , [id])
    const Globalesmix = await pool.query("Select * From `G_general_mixto_a20` WHERE ID = ?" , [id])
    const Globales19 = await pool.query("Select * From `G_general_sub19_a20` WHERE ID = ?" , [id])
console.log(id)
console.log(registro)


res.render('id/equipos/equipo',{registro,id,Globales,Globalesmix,Globales19,Globalesfeme})}

module.exports = categorias;