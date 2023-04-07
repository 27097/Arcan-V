//NOTA* MEJOR USAR AXIOS 
const { Gender }=require('../db')

const { MY_KEY } = process.env


const getAllGenres = async () => {
  try {
    const dbGenres = await Gender.findAll()

    if (!dbGenres.length) {
      let genres
      await fetch(`https://api.rawg.io/api/genres?key=${MY_KEY }`)
      
        .then(res => res.json())
        .then(async ({ results }) => {
          if (!results) throw Error('API request error')
          genres = results.map(genre => {
            return {
              id: genre.id,
              name: genre.name
            }
          })
          await Gender.bulkCreate(genres)
        })
      return genres
    }

    
  } catch (error) {
    throw Error(error.message)
  }
}

module.exports = getAllGenres
