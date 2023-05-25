import { useState } from "react"
import style from "./Form.module.css"
import Validation from "../validation/Validation";

export default function Form(props){

    const [userData, setUserData] = useState({
        email:"",
        password:""
    });

    const [error, setErrors] = useState({})

    const handleChange=event=>{      
        // setUserData({
        //     ...userData,
        //     [event.target.name]:event.target.value
        // })       
        //tambien puede ser
        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name]: value
        })

        setErrors(Validation({
            ...userData,
            [name]:value
        }))

    }

    const handleSubmit = event =>{
        //para no recarcar y perder los estados
        event.preventDefault();
        props.login(userData);
        
    }

    return(
        <div className={style.contenedor}>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.contimg}>
                    <img src="https://es.rollingstone.com/wp-content/uploads/2022/09/La-serie-Rick-y-Morty-podria-ser-eterna.jpg" alt="login" />
                </div>
                <hr/>
                <label>EMAIL</label>
                <br/>
                <input 
                    name="email" 
                    type="text"
                    value={userData.email}
                    onChange={handleChange} />
                <p>{error.email ?error.email :null}</p>
                <label>PASSWORD</label>
                <br/>
                <input 
                    name="password" 
                    type="password" 
                    value={userData.password}
                    onChange={handleChange}/>
                <p>{error.password ?error.password :null}</p>
                <button type="submit">SUBMIT</button>

            </form>
        </div>
    )
}
