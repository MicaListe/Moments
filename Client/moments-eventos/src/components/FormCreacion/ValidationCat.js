
export default function ValidationCat (inputs){
    const regexName=/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\s,.]{1,30}$/
    const regexType=/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{1,5}$/
    const regexDescription=/^[A-Za-z0-9\s]{1,600}$/
    
    // const regexImage=//

    const errors={}

    if (inputs.name.length > 30) {
        errors.name = "El nombre no debe tener más de 30 caracteres";
    } else if (!regexName.test(inputs.name)) {
        errors.name = "Comprueba que tenga mayúsculas y minusculas y no contenga símbolos especiales ni números";
    }

    if (inputs.type.length > 5) {
        errors.type = "El tipo de menú no debe tener más de 5 caracteres";
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