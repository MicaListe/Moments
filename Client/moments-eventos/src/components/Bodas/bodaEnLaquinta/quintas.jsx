export default function Quintas({name, image}){
    return(
        <div>
            <img src={image} alt={name} style={{borderRadius:"5px", width:"300px"}} />
            <p style={{fontSize:"17px", marginTop:"10px", textAlign:"center"}}>{name}</p>
        </div>
    )
}