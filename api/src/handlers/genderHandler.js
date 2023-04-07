const { Gender }=require('../db')
const {postGender, getGender, getGenderByName} = require('../controllers/genderControllers')


const gender_post_Handler =async (req,res)=>{
    try {
        const { name }=req.body;
        
       const aux = name? await postGender(name): 'enter Gender´s name'
       
       res.status(200).json(aux)
       
    } catch (error) {
    
         
        res.status(404).send({ error:error.message })
    }

}

const gender_get_Handler = async(req,res)=>{
       try {
         const { name } = req.query;
       
         const Getgenders = name? await getGenderByName(name): await getGender()
        
         res.status(200).json(Getgenders)
        
       }catch (error) {
          res.status(400).send({error:error.message})       
       }
    
}












module.exports = {
    gender_post_Handler,
    gender_get_Handler
}


// funciona perf
// const cleanArray = (arr ) =>{
//     const clean = arr.map(elem=> {
//         return {
    //             id: elem.id,
    //         name: elem.name,
    //         description: elem.description,
//         platforms: elem.platforms.map(item => item.platform.name),
//         image: elem.background_image ? elem.background_image : 'https://sm.ign.com/ign_es/screenshot/default/60225-metal-gear-solid-3-subsistence-playstation-2_umwf.jpg',
//         released: elem.released,
//         rating: elem.rating_top,
//         genres: elem.genres.map(genre => genre.name),
//         created: false  

//         }
//     });
//     return clean;
// } 