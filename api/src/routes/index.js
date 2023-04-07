const { Router } = require('express');
const gameRouter = require('./gameRouter') //importo el archivo gameRouter
const genderRouter = require('./genderRouter')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
//--------------------------defino las rutas modularizadas--------------------------------//

router.use('/games', gameRouter)
router.use('/genders', genderRouter)

//--------------------------defino las rutas modularizadas--------------------------------//






// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
