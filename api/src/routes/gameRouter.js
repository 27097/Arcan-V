const { Router } = require('express');
const { game_get_Handler, game_ById_Handler, createHandler } = require('../handlers/gameHandlers')

const gameRouter = Router()
//--------------------------defino las rutas--------------------------------//
/* aca defino los handler de prueva */

// const game_get_Handler = (req, res)=>{
//     res.send('NIY: ESTA RUTA ME TRAE LOS VIDEOJUEGOS DE LA API Y LA DB, OBTENER 15 JUEGO CON UN NOMBRE')
// }

// const game_ById_Handler = (req, res)=>{
//     res.send('NIY: ME TRAE JUEGOS POR ID API O DB, Y EL GENERO ASOCIADO')
// }

// const createHandler = (req, res)=>{
//     res.send('NIY: CREAR JUEGO EN LA DB Y RELACIONARLO CON SU GENERO')
// }

//--------------------------defino las rutas--------------------------------//


//--------------------------defino las rutas--------------------------------//
gameRouter.get('/', game_get_Handler)

gameRouter.get('/:id', game_ById_Handler )

gameRouter.post('/', createHandler)








//--------------------------lo exporto para requerirlo en routes/index.js--------------------------------//

module.exports = gameRouter;