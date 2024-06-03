export default function DecoParty({image}){
    return(
        <div style={{flexDirection:"column", height:"100%", alignItems:"center", justifyContent:"center", display:"flex"}}>
            <img src={image[0]} alt="Imagen no encontrada" style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "5px"}} />
            {/* {image.map((element,index)=>(
                 <img src={element} key={index} style={{borderRadius:"5px", width:"300px"}} /> 
            ))} */}
        </div>
    )
}