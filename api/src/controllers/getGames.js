const {Videogame} = require('../db')
const axios = require('axios')

const { MY_KEY } = process.env




const  getGameById_DB = async(id) =>{
    const auxDB = Videogame.findByPk(id)
    return auxDB
} 
   
       






const getGameById_API = async (id) =>{
    let game_id_api = await axios.get(`https://api.rawg.io/api/games/${id}?key=${MY_KEY}`)
        
    let game = {
        id: game_id_api.data.id,
        name: game_id_api.data.name,
        description: game_id_api.data.description,
        platforms: game_id_api.data.platforms.map(item => item.platform.name),
        image: game_id_api.data.background_image ? game_id_api.data.background_image : 'https://sm.ign.com/ign_es/screenshot/default/60225-metal-gear-solid-3-subsistence-playstation-2_umwf.jpg',
        released: game_id_api.data.released,
        rating: game_id_api.data.rating_top,
        genres: game_id_api.data.genres.map(genre => genre.name)
    }
    return game
}  

module.exports = {
    getGameById_DB,
    getGameById_API
}