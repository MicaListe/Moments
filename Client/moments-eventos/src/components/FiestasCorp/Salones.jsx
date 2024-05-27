
export default function Salones({ name, image }) {
    return (
        <div>
            <div style={{display:"flex", justifyContent:"center", flexDirection:"column", height:"100%", alignItems:"center" }}>
                <img src={image} alt="Imagen no encontrada" style={{ width: "300px", borderRadius:"5px", height:"200px", marginLeft:"-8px"}} />
                <p style={{fontSize:"17px", marginTop:"10px", textAlign:"center"}}>{name}</p>
            </div>
        </div>
    );
}