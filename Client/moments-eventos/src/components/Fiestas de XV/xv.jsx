export default function Xv({image,name}){

    return(
        <div>
            <img src={image} alt="Imagen no encontrada" style={{width:"300px", borderRadius:"5px"}}/>
            <p style={{fontSize:"17px", marginTop:"10px", textAlign:"center"}}>{name}</p>
        </div>
    )
}