export default function Salon({ name, image }) {
    return (
        <div>
            <div>
                <img src={image} alt={name} style={{ width: "300px", borderRadius:"5px", height:"200px", marginLeft:"-8px"}} />
                <p style={{fontSize:"17px", marginTop:"10px", textAlign:"center"}}>{name}</p>
            </div>
        </div>
    );
}