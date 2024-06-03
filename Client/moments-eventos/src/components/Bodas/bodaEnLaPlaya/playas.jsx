export default function Playas({ name, image }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
            <img src={image} alt={name} style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "5px"}} />
            <p style={{ fontSize: "17px", marginTop: "10px", textAlign: "center" }}>{name}</p>
        </div>
    );
}

