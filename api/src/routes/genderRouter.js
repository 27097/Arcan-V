const { Router } = require('express')
const {gender_post_Handler, gender_get_Handler} = require('../handlers/genderHandler')

const genderRouter = Router()


// ---------------------------------------------------------------------------------

/* aca defino los handler de prueva */
// const gender_post_Handler = (req,res)=>{
//     res.send('NIY: ACA CREO EL POST DE GENDER')
// }

// const gender_get_Handler = (req,res)=>{
//     res.send('NIY: OBTENDO TODOS LOS GENDER')
// }

/* aca defino los handler de prueva */

// ---------------------------------------------------------------------------------


genderRouter.post('/', gender_post_Handler)


genderRouter.get('/', gender_get_Handler )






module.exports = genderRouter;