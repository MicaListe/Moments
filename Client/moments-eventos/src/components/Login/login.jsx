
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from '../../Redux/actions';
import { useNavigate } from 'react-router-dom';
import '../Login/login.css';
import logo from '../../assets/logo.png';
import rama from '../../assets/ramaDorada.png';

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialForm = {
        name: '',
        mail: '',
        password: '',
        roleId: 0,
    };

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
            window.alert('Usuario no creado');
        } else {
            dispatch(userRegister(users));
            localStorage.setItem('user', JSON.stringify(users)); // Guardar usuario en localStorage
            navigate('/'); // Navegar a la página principal
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
                    <select name="roleId" id="" onClick={(e) => handleRoleId(e.target.value)}>
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
