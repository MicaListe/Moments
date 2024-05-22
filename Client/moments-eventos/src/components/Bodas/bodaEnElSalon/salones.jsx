export default function Salones({image,name}){
    return(
        <div style={{flexDirection:"column", height:"100%", alignItems:"center", justifyContent:"center", display:"flex"}}>
            <img src={image} alt="Imagen no encontrada" style={{borderRadius:"5px", width:"300px"}} />
            <p style={{fontSize:"17px", marginTop:"10px", textAlign:"center"}}>{name}</p>
        </div>
    )
}