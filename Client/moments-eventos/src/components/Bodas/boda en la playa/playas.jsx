

export default function Playas({ name, image}) {
    return (
        <div>
            <div>
                <img src={image} alt={name} style={{ width: "300px", borderRadius:"5px"}} />
                <p style={{fontSize:"17px", marginTop:"10px", textAlign:"center"}}>{name}</p>
            </div>
        </div>
    );
}
