const {Videogame} = require('../db')
const axios = require('axios')
const { MY_KEY } = process.env

//search withOut name  
const getAllGames = async (name)=>{

    if(!name){
        const data_DB = await Videogame.findAll()
          const data_API_DIRTY  = (await axios.get(`https://api.rawg.io/api/games?key=${MY_KEY}`)).data.results;
          const data_API = cleanArray(data_API_DIRTY ) //cleanArray viene de controller getAllOrGetById
          const allGames = [...data_DB, ...data_API]
          return allGames 
        }
}
//search with name  
    
const searchByName = async (name) =>{
  
    

    const DBvideogames = await Videogame.findAll({where:{name}})
    const data_API_DIRTY  = (await axios.get(`https://api.rawg.io/api/games?key=${MY_KEY}`)).data.results;
    
    const data_API = cleanArray(data_API_DIRTY ) //cleanArray viene de controller getAllOrGetById
    const filteredApi = data_API.filter( game => game.name === name )


    const VideogamesByName = [ ...DBvideogames, ...filteredApi ]

    return VideogamesByName

    

    
} 





     
const cleanArray = (arr ) =>{
    const clean = arr.map(elem=> {
        return {
            id: elem.id,
            name: elem.name,
            description: elem.description,
            platforms: elem.platforms.map(item => item.platform.name),
            image: elem.background_image ? elem.background_image : 'https://sm.ign.com/ign_es/screenshot/default/60225-metal-gear-solid-3-subsistence-playstation-2_umwf.jpg',
            released: elem.released,
            rating: elem.rating_top,
            genres: elem.genres.map(genre => genre.name),
            created: false  
            
        }
    });
    return clean;
}    
    

    
module.exports = {
    searchByName,
    getAllGames,
    cleanArray
}




