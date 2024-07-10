
export const isAuthenticated = () => {
    return !!localStorage.getItem('user'); // O cualquier lógica para verificar la autenticación
};
