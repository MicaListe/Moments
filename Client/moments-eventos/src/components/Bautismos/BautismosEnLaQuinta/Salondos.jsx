export default function Salondos({ name, image}) {
    return (
        <div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", height:"100%"}}>
                <img src={image} alt="Imagen no encontrada" style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "5px"}} />
                <p style={{fontSize:"17px", marginTop:"10px", textAlign:"center"}}>{name}</p>
            </div>
        </div>
    );
}
