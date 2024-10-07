export default function ValidationPlaces (inputs){
    
    const regexType=/^(?=.*[A-Z])[A-Za-z\s]{1,25}$/
    const regexDescription=/^[A-Za-z0-9\s]{1,600}$/


    const errors={}

    if (inputs.type.length > 25) {
        errors.type = "El tipo de menú no debe tener más de 25 caracteres";
    } else if (!regexType.test(inputs.type)) {
        errors.type = "Comprueba que tenga mayúsculas y minusculas y no contenga símbolos especiales ni números"
    }


    if (inputs.description.length > 600) {
        errors.description = "La descripción debe tener un máximo de 600 caracteres";
    } else if (!regexDescription.test(inputs.description)) {
        errors.description = "Comprueba que tenga mayúsculas y minusculas y no contenga símbolos especiales"
    }
    
    return errors;
}