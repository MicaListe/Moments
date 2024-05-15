
export default function Playas({ name, image }) {
    return (
        <div>
            <div>
                <img src={image} alt={name} style={{ width: "300px", borderRadius:"5px"}} />
                <p style={{marginLeft:"100px", fontSize:"15px", marginTop:"10px"}}>{name}</p>
            </div>
        </div>
    );
}
