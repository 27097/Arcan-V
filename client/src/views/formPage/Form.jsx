import { useState } from "react";
import style from './Form.module.css'

const Form = ()=>{
    
    const [form, setForm] = useState({
        nombre:'',
        imagen: '',
        descripcion:'',
        plataformas:'',
        released:'',
        rating:'',
        genero:'',
    })
const changeHandler = (event)=>{
      const property = event.target.name;
      const value = event.target.value;

      setForm({
        ...form,
        [property]: value
      })
}

    
    return(
        <form  >
              <div className={style.Form} >
                <label>Nombre:</label>
                <input type="text" value={form.nombre} onChange={changeHandler} name="nombre"/>
              </div>

              <div>
                <label>Imagen:</label>
                <input type="text" value={form.imagen} onChange={changeHandler} name="imagen"/>
              </div>

              <div>
                <label>Descripción: </label>
                <input type="text" value={form.descripcion} onChange={changeHandler} name="descripcion"/>
              </div>

              <div>
                <label>Plataformas: </label>
                <input type="text" value={form.plataformas} onChange={changeHandler} name="plataformas" />
              </div>

              <div>
                <label>Released: </label>
                <input type="text"  value={form.released} onChange={changeHandler} name="released"/>
              </div>

              <div>
                <label>Rating: </label>
                <input type="text" value={form.rating} onChange={changeHandler} name="rating"/>
              </div>

              <div>
                <label>Genero: </label>
                <input type="text" value={form.genero} onChange={changeHandler} name="genero" />

              </div>
              <div>
                <button></button>
              </div>

        </form>
    )
}


export default Form;