
export default function Salones({ name, image }) {
    return (
        <div>
            <div>
                <img src={image} alt={name} style={{ width: "300px", borderRadius:"5px", height:"200px", marginLeft:"-8px"}} />
                <p style={{marginLeft:"100px", fontSize:"17px", marginTop:"10px"}}>{name}</p>
            </div>
        </div>
    );
}