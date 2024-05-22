export default function Quintas({name, image}){

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"100%"}}>
            {/* {image.map((element,index)=>(
                 <img src={element} key={index} style={{borderRadius:"5px", width:"300px"}} /> 
            ))} */}
            <img src={image} alt={name} style={{borderRadius:"5px", width:"300px"}} />
            <p style={{fontSize:"17px", marginTop:"10px", textAlign:"center"}}>{name}</p>
        </div>
    )
}