import React, { useState, useEffect, useRef } from 'react'
/* */
/*si se declara algo aqui es que no va  cambiar si se pone dentro del export es donde se va a actualizar*/
export const LoginForm = () => {
    console.log('I Loaded again') /*crea variable usuario solo se puede llamar cuadno se use setusuario y su valor default es Roberto*/
    const[usuario, setUsuario] = useState(undefined);
    const[password, setPassword] = useState(undefined)
   // const[timesChanged, settimesChanged] = useState(0)
    //const otherNumber = useRef(0)

    //OnComponentMount
    useEffect(()=>{
        console.log('I Loaded for the first time')//solo se corre la primera vez
    }, [])
    //OnComponentChange
    useEffect(()=>{
        //console.log('usuario changed')//se corre cada vez que cambie usuario
        otherNumber.current = otherNumber.current + 1
    },[usuario])
    /* //OnComponentDestroy
    useEffect(() => {
        first
        return()=>{
            second
        }
    },[third]) */

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }


  
    const handleUsuarioChange = (e) =>{
        setUsuario(e.target.value)
    }

    const onLogInFormSubmitted = (e) =>{
        e.preventDefault(); //evita que si esta vacio se cargue denuevo la pagina
        console.log('e',e)
    }
  return (
    /*se usa <> ya que no puedes enviar do cosas asi sueltas 
    <>
    <div>LoginForm</div>
    <div>LoginForm</div>
    </>
    
    use ref te sirve para guardar valores entre distintas operaciones pero no guarda el estado (no se corre de nuevo cada que cambie s si que se guardan valores y no se reinician)
    en use state cuando cambio de usuario se corre todo de nuevo (sirve para cambios en la app)
    */
    <>
    <form onSubmit={onLogInFormSubmitted}>
    <label>Usuario</label>
    <input type="text" onChange={handleUsuarioChange} />
    <input type="password" onChange={handlePasswordChange} />
    <button type='submit'>Log In</button>
    </form>
    
    </>
    /*<p>{usuario}</p>
    <p>(`El usuario a cambiado ${otherNumber.current}veces`)</p>
    <button onClick={()=> {console.log(otherNumber.current)}}>button</button>*/

  )
}
