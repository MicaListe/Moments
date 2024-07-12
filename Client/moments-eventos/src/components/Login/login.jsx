import { getUsers } from "../../Redux/actions"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import logo from '../../assets/logo.png';
import rama from '../../assets/ramaDorada.png'; 
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Login (){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const usuarios = useSelector((state)=>state.users || [])
    console.log(usuarios, "u")

    const initialState={
        mail:"",
        password:""
    }

    const [users, setUser] = useState(initialState)
    console.log(users, "i")
    useEffect(()=>{
        dispatch(getUsers())
    },[])

    

    const handleChange = (event) =>{
        const {name, value}= event.target
        setUser({
            ...users,
            [name]:value
        })
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault()
    //    const userExist = usuarios.some((user)=>user.mail === users.mail && users.password === users.password)
        const userExist = Array.isArray(usuarios) && usuarios.some((user) => user.mail === users.mail && user.password === users.password);
        console.log(userExist, "h")
        if(userExist){
            navigate("/")
        }else{
            window.alert("Correo o contraseña incorrecta")
        }
    }
    
    return(
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
                    <button type="submit" onClick={handleSubmit} className="btn btn-block create-account" >
                        Log In
                    </button>
                </div>
                <div className="form-group">
                    <p>¿Aún no estás registrado?</p>
                    <Link to="/register">
                        <button type="submit" className="btn btn-block create-account" >
                            Registrarme
                        </button>
                    </Link> 
                </div>
            </form>
        </div>
    )
}