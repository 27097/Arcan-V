import style from './Card.module.css'

const Card = (props) =>{
    return(
        <div className={style.card}>
        <h2>{props.name}</h2>
        <p>{props.image}</p>
        <p>{props.genres}</p>
        </div>
    )
}


export default Card