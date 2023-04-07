const { Gender }=require('../db')


const postGender = async (name) =>{
    const aux = await Gender.create({ name })
    // await addGender()
    return aux
}    
const getGenderByName = async (name)=>{
    const aux = await Gender.findAll({where:{name}})
    return aux
}
const getGender = async ()=>{
    const aux = await Gender.findAll()
    return aux
}







module.exports ={
    postGender,
    getGender,
    getGenderByName
}