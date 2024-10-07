
export default function ValidationForm (inputs){
    const regexName=/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\s,.]{1,30}$/
    const regexType=/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{1,5}$/
    const regexDescription=/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\s,.]{1,600}$/
    // const regexImage=//

    const errors={}

    if (inputs.name.length > 30) {
        errors.name = "El nombre no debe tener más de 30 caracteres";
    } else if (!regexName.test(inputs.name)) {
        errors.name = "Nombre invalido";
    }else if (!/[A-Z]/.test(inputs.name)) {
        errors.name = "Se requiere al menos una letra mayúscula";}


    if (inputs.type.length > 5) {
        errors.type = "El tipo de menú no debe tener más de 5 caracteres";
    } else if (!regexType.test(inputs.type)) {
        errors.type = "Tipo de menú invalido,";
    }else if (!/[A-Z]/.test(inputs.type)) { 
        errors.type = "Se requiere al menos una letra mayúscula";}


    if (inputs.description.length > 600) {
        errors.description = "La descripción debe tener un máximo de 600 caracteres";
    } else if (!regexDescription.test(inputs.description)) {
        errors.description = "Descripción inválida";
    }else if (!/[A-Z]/.test(inputs.description)) { 
        errors.description = "Se requiere al menos una letra mayúscula";}

    return errors;
}