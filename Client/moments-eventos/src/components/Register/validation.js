export default function Validation(inputs) {
    const regexNameUser = /^[a-zA-Z0-9]{1,10}$/;
    const regexMail = /^[a-zA-Z0-9!@#\$%\^&\*\(\)_\+\-=\[\]\{\};:'",\.<>\/\?\\|`~]{1,40}$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,10}$/;

    const errors = {};


    if (inputs.name.length > 10) {
        errors.name = "El nombre no debe tener más de 10 caracteres";
    } else if (!regexNameUser.test(inputs.name)) {
        errors.name = "Nombre inválido";
    }


    if (inputs.mail.length > 40) {
        errors.mail = "El email no debe tener más de 40 caracteres";
    } else if (!regexMail.test(inputs.mail)) {
        errors.mail = "Email inválido";
    }


    if (inputs.password.length < 5 || inputs.password.length > 10) {
        errors.password = "La contraseña debe tener entre 5 y 10 caracteres";
    } else if (!regexPassword.test(inputs.password)) {
        errors.password = "Contraseña inválida";
    }

    return errors;
}



