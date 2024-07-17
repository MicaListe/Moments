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
        adminKey: ""
    };

    const usuarios = useSelector((state) => state.users);

    const [users, setUsers] = useState(initialForm);
    const [AdminKey, setAdminKey] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsers({
            ...users,
            [name]: value,
        });
    };

    const handleRoleId = (e) => {
        const roleId = parseInt(e);
        setUsers({
            ...users,
            roleId: roleId,
        });
        setAdminKey(roleId === 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (users.name === '' || users.mail === '' || users.password === '' || users.roleId === 0) {
            window.alert('Por favor complete todos los campos.');
        } else if (users.roleId === 1 && users.adminKey !== "4534") {
            window.alert("Clave de administrador incorrecta");
        } else {
            const emailExist = usuarios.some(user => user.mail === users.mail);

            if (emailExist) {
                window.alert('El correo electrónico ya está registrado.');
            } else {
                dispatch(userRegister(users));
                window.alert("Usuario creado exitosamente");

                const updatedUsers = [...usuarios, users];
                localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
                localStorage.setItem('user', JSON.stringify(users));

                navigate('/login');
            }
        }
    };

    return (
        <div className="registration-form shadow-sm p-4 rounded" style={{ transition: 'box-shadow 0.3s' }}>
            <form
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                onSubmit={handleSubmit}
            >
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
                    <select name="roleId" onChange={(e) => handleRoleId(e.target.value)}>
                        <option value="0">Seleccionar Rol</option>
                        <option value="1">Administrador</option>
                        <option value="2">Usuario</option>
                    </select>
                </div>
                {AdminKey && (
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            id="adminKey"
                            name="adminKey"
                            value={users.adminKey}
                            onChange={handleChange}
                            placeholder="Clave de administrador"
                        />
                    </div>
                )}
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
                    <button 
                        type="submit" 
                        className="btn btn-block create-account btn-primary"
                        style={{ width: '60%', padding: '8px', marginBottom: '20px' }}
                    >
                        Registrarme
                    </button>
                </div>
            </form>
        </div>
    );
}
