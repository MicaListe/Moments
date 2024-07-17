import { getUsers } from "../../Redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from '../../assets/logo.png';
import rama from '../../assets/ramaDorada.png'; 
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ConfirmationLogin from "./modalConfirmation";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const usuarios = useSelector((state) => state.users || []);

    const initialState = {
        mail: "",
        password: ""
    };

    const [users, setUser] = useState(initialState);
    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...users,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const userExist = Array.isArray(usuarios) && usuarios.some((user) => user.mail === users.mail && user.password === users.password);
        if (userExist) {
            setIsOpenModal(true);
            const loggedUser = usuarios.find((user) => user.mail === users.mail);
            localStorage.setItem('user', JSON.stringify(loggedUser));
        } else {
            window.alert("Correo o contraseña incorrecta");
        }
    };

    const closeModal = () => {
        setIsOpenModal(false);
        // navigate("/");
    };

    return (
        <div className="registration-form">
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
                        id="email"
                        name="mail"
                        value={users.mail}
                        onChange={handleChange}
                        placeholder="Correo"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        className="form-control item"
                        id="password"
                        name="password"
                        value={users.password}
                        onChange={handleChange}
                        placeholder="Contraseña"
                    />
                </div>

                <div className="form-group">
                    <button type="submit" style={{ width: '60%', padding: '8px', marginBottom: '20px' }} className="btn create-account">
                        Log In
                    </button>
                </div>

                <div className="form-group">
                    <p style={{ marginLeft: '15px' }}>¿Aún no estás registrado?</p>
                    <Link to="/register">
                        <button type="button" style={{ width: '60%', padding: '8px', marginBottom: '20px' }} className="btn create-account">
                            Registrarme
                        </button>
                    </Link>
                </div>
            </form>
            <ConfirmationLogin show={isOpenModal} handleClose={closeModal} />
        </div>
    );
}

