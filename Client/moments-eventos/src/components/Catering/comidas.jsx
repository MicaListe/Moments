export default function Comidas({ name, image }) {
    return (
        <div>
            <div style={{display:"flex", justifyContent:"center", flexDirection:"column", height:"100%", alignItems:"center" }}>
                <img src={image} alt="Imagen no encontrada" style={{ width: "100%", borderRadius:"5px", height:"250px", objectFit: "cover"}} />
                <p style={{fontSize:"17px", marginTop:"10px", textAlign:"center"}}>{name}</p>
            </div>
        </div>
    );
}
