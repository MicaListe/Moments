import { getUsers } from "../../Redux/actions"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import logo from '../../assets/logo.png';
import rama from '../../assets/ramaDorada.png'; 
import { Link } from "react-router-dom";
export default function Login (){

    const dispatch = useDispatch()
    const usuarios = useSelector((state)=>state.users)
    console.log(usuarios, "u")

    useEffect(()=>{
        dispatch(getUsers())
    },[])

    

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
                        value={""}
                        placeholder="Correo"
                    />
                </div>
                
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control item"
                        id="password"
                        name="password"
                        value={""}
                        placeholder="Contraseña"
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block create-account" >
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