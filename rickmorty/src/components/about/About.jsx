import style from "./About.module.css"

export default function About(prop){
    return(
        <div className={style.contenedor}>
            <div className={style.background}>
                <h1>About</h1>
                <p>Programado por Guillermo Dias</p>
            </div>
            
        </div>
    )
}