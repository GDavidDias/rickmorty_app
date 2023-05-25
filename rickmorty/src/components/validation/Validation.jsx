export default function Validation(input){
    //recibe el input como objeto que es el userData
    //en tiempo real {email:--, password:--}
    const error = {}

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const regexPassword = new RegExp("[0-9]");

    if (!regexEmail.test(input.email)) {
        error.email="Debe ingresar un mail valido"
    }
    if(!input.email){
        error.email="Debe ingresar un mail"
    }
    if(input.email.length > 35){
        error.email = "No puede ser mayor a 35 caracteres"
    }
    if(!regexPassword.test(input.password)){
        error.password="Al menos un numero"
    }
    if(input.password.length<6 || input.password.length > 10){
        error.password="Entre 6 y 10 caracteres"
    }

    return error;
}
