import profesionalismo from "../../assets/profesionalismo.png"
import compromiso from "../../assets/compromiso.png"
import creatividad from "../../assets/creatividad.png"

export default function valores(){
    return(
        <div className="text-center mt-5">
            <h2 style={{fontSize:"40px",fontWeight: "400", fontStyle:"italic", fontFamily:"Dancing Script, cursive" }}>¿Por qué elegirnos?</h2>
            <div className="d-flex justify-content-center mt-3">
                <div className="card p-3 me-3" style={{width:"300px", height:"240px"}}>
                    <div className="card-body d-flex flex-column justify-content-center text-center">
                        <img src={profesionalismo} style={{width:"50px", marginLeft:"93px"}}/>
                        <h2>Profesionalismo</h2>
                        <p style={{fontSize:"12px"}}>Ofrecemos servicios de alta calidad con un enfoque profesional en cada aspecto 
                            del proceso de planificación y 
                            ejecución del evento.
                        </p>
                    </div>
                </div>
                <div className="card p-3 me-3" style={{width:"300px", height:"240px"}}>
                    <div className="card-body d-flex flex-column justify-content-center text-center">
                        <img src={compromiso} style={{width:"55px", marginLeft:"93px"}}/>
                    <h2>Compromiso</h2>
                        <p  style={{fontSize:"12px"}}>Nos comprometemos  a proporcionar una experiencia 
                            excepcional para cada cliente, desde el primer 
                            contacto hasta la finalización del evento.
                        </p>  
                    </div>
                </div>
                <div className="card p-3 me-3" style={{width:"300px", height:"240px"}}>
                    <div className="card-body d-flex flex-column justify-content-center text-center">
                        <img src={creatividad}  style={{width:"45px", marginLeft:"93px"}}/>
                        <h2>Creatividad</h2>
                        <p  style={{fontSize:"12px"}}>Desarrollamos ideas originales y creativas para
                            cada evento, adaptadas a las necesidades y 
                            preferencias específicas de los clientes.
                        </p>  
                    </div>
                </div>
            </div>
            <h2 className="mt-5" style={{fontSize:"40px",fontWeight: "400", fontStyle:"italic", fontFamily:"Dancing Script, cursive" }}>Contactate con nosotros</h2>
            <button className="mt-4 mb-4">Ir a calendario</button>
        </div>
    )
}