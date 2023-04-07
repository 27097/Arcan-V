const {Videogame, Gender} = require('../db')

const newGame = async(name, description, released, image, rating, platform, gender)=>{
    if(!name) throw new Error('Poner nombre')

    const aux = await Videogame.create({name, description, released, image, rating, platform, created: true})

        const genderFinded = await Gender.findOne({where:{name:gender }})

        genderFinded? await aux.addGender(genderFinded):'';
    



    
    // await aux.addGender(genders)
    
    return aux;


}


module.exports = newGame;