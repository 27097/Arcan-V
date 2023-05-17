const newGame = require('../controllers/newGame') //crear juego
const {getGameById_DB, getGameById_API} = require('../controllers/getGames') //buscar por id
const { searchByName, getAllGames}=require('../controllers/getAllOrGetByName') //



   //GET ALL GAMES OR GET BY NAMES/ CONTROLLER getAllOrGetByName.js
const game_get_Handler = async (req, res)=>{
     try {
        const {name} = req.query;
        const source = name? await searchByName(name) : await getAllGames() 
        res.status(200).json(source)
      } catch (error) {
        res.status(404).send( { error:error.message } )
      }
    }
    //------------------------------------------------------------------------------------------------------------------------------- 
    //------------------------------------------------------------------------------------------------------------------------------- 
    

  //GET GAME BY ID OR WITHOUT ID, IN THE DB OR API/ CONTROLLER getGames.js     
    const game_ById_Handler = async(req, res)=>{
              try {
                const {id} = req.params;
                const sourse = isNaN(id)? await getGameById_DB(id) : await getGameById_API(id)  
                res.status(200).json(sourse) 
        
            } catch (error) {
                
                res.status(404).send( { error:error.message } )
            }    
        }
// ----------------------------------------------------------------------------------------------------------------- 
//------------------------------------------------------------------------------------------------------------------------------- 
            


        


    //CREATE A NEW GAME ---> CONTROLLER newGame.js
const createHandler = async (req, res)=>{
          try {
            const {name, description, released, image, rating, platform, gender} = req.body; 
            console.log(req.body);
            const aux = await newGame(name, description, released, image, rating, platform, gender)
            res.status(200).json(aux) 
    
          } catch (error) {
            res.status(404).send( { error:error.message } )
          }
      
    
}
//----------------------------------------------------------------------------------------------------------------- 
//------------------------------------------------------------------------------------------------------------------------------- 
        
 
module.exports = {
        game_get_Handler,
        game_ById_Handler,
        createHandler
    };
    
