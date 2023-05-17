import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getVideogames } from "../../redux/actions";

const Home = () => {
 //1ro useEfect, 2do dispatch = useDispatch(), 3ro hacer dispatch de getVideogames dentro de useEfect
 const dispatch = useDispatch()
    
 useEffect(()=>{
        console.log('hola');
      dispatch(getVideogames)
 },[dispatch])


   
    return(
        <div>
        <h1>soy home</h1>
       <CardsContainer />
        </div>
    )
}

export default Home;