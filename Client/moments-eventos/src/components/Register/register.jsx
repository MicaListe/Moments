import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../Redux/actions';
import { useNavigate } from 'react-router-dom';
import './register.css';
import logo from '../../assets/logo.png';
import rama from '../../assets/ramaDorada.png';

export default function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialForm = {
        name: '',
        mail: '',
        password: '',
        roleId: 0,
    };

    const usuarios = useSelector((state) => state.users);
    const [users, setUsers] = useState(initialForm);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsers({
            ...users,
            [name]: value,
        });
    };

    const handleRoleId = (e) => {
        setUsers({
            ...users,
            roleId: parseInt(e),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (users.name === '' || users.mail === '' || users.password === '' || users.roleId === 0) {
            window.alert('Por favor complete todos los campos.');
        } else {
            // Verificar si el correo electrónico ya está registrado
            const emailExist = usuarios.some(user => user.mail === users.mail);
    
            if (emailExist) {
                window.alert('El correo electrónico ya está registrado.');
            } else {
                
                dispatch(userRegister(users));
                window.alert("Usuario creado exitosamente")

                // Actualizar el estado de usuarios en Redux
                const updatedUsers = [...usuarios, users];

                // Guardar usuario en localStorage
                localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
                localStorage.setItem('user', JSON.stringify(users));

                navigate('/login');
            }
        }
    };

    return (
        <div className="registration-form">
            <form>
                <img src={rama} style={{ width: '100px', position: 'absolute', left: '0px', top: '200px' }} />
                <img src={rama} style={{ width: '100px', transform: 'rotate(180deg)', position: 'absolute', left: '1410px', top: '115px' }} />
                <img src={rama} style={{ width: '90px', transform: 'rotate(200deg)', position: 'absolute', left: '1420px', top: '700px' }} />
                <div className="form-icon">
                    <img src={logo} alt="" />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control item"
                        id="username"
                        name="name"
                        value={users.name}
                        onChange={handleChange}
                        placeholder="Nombre"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control item"
                        id="email"
                        name="mail"
                        value={users.mail}
                        onChange={handleChange}
                        placeholder="Correo"
                    />
                </div>
                <div className="form-option">
                    <label htmlFor="">Cuenta para:</label>
                    <select name="roleId" id="" onChange={(e) => handleRoleId(e.target.value)}>
                        <option value="0">Seleccionar Rol</option>
                        <option value="1">Administrador</option>
                        <option value="2">Usuario</option>
                    </select>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control item"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        value={users.password}
                        placeholder="Contraseña"
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block create-account" onClick={handleSubmit}>
                        Registrarme
                    </button>
                </div>
            </form>
        </div>
    );
}
