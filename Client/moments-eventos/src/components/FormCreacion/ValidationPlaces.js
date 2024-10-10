export default function ValidationPlaces (inputs){

    const regexName= /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\s]{1,30}$/
    const regexEvent= /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\s,.]{1,25}$/
    const regexType=/^(?=.*[A-Z])[A-Za-z\s]{1,7}$/
    const regexDescription=/^[A-Za-z0-9\s]{1,600}$/

    const errors={}

    if(inputs.name.length > 30){
        errors.name = "El nombre no debe tener más de 30 caracteres"
    }else if (!regexName.test(inputs.name)){
        errors.name = "Comprueba que tenga mayúsculas y minúsculas y no contenga símbolos especiales ni números"
    }

    if(inputs.city.length > 30){
        errors.city = "La ciudad no debe tener más de 30 caracteres"
    }else if (!regexName.test(inputs.city)){
        errors.city = "Comprueba que tenga mayúsculas y minúsculas y no contenga símbolos especiales ni números"
    }

    if(inputs.country.length > 30){
        errors.country = "El país no debe tener más de 30 caracteres"
    }else if (!regexName.test(inputs.country)){
        errors.country = "Comprueba que tenga mayúsculas y minúsculas y no contenga símbolos especiales ni números"
    }

    if (inputs.type.length > 7) {
        errors.type = "El tipo de lugar no debe tener más de 7 caracteres";
    } else if (!regexType.test(inputs.type)) {
        errors.type = "Comprueba que tenga mayúsculas y minusculas y no contenga símbolos especiales ni números"
    }

    if (inputs.event.length > 25) {
        errors.event = "El tipo de lugar no debe tener más de 25 caracteres";
    } else if (!regexEvent.test(inputs.event)) {
        errors.event = "Comprueba que tenga mayúsculas y minusculas y no contenga símbolos especiales ni números"
    }

    if (inputs.description.length > 600) {
        errors.description = "La descripción debe tener un máximo de 600 caracteres";
    } else if (!regexDescription.test(inputs.description)) {
        errors.description = "Comprueba que tenga mayúsculas y minusculas y no contenga símbolos especiales"
    }
    
    return errors;
}