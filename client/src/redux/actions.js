const axios = require('axios')
export const GET_VIDEOGAMES = "GET_VIDEOGAMES"
const { MY_KEY } = process.env



export const getVideogames = ()=>{
    return async function  (dispatch){
        const data_API_DIRTY  = await axios.get(`https://api.rawg.io/api/games?key=${MY_KEY}`);

        const games = data_API_DIRTY.data.results
        
       return dispatch({type: GET_VIDEOGAMES, payload: games})

    }
}