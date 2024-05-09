import React from "react";
import subtitle from "../../assets/subtitle.png";

function Subtitulo() {
  return (
    <div className="container-fluid text-center py-4">
      <img
        src={subtitle}
        className="img-fluid"
        alt="Subtítulo"
        style={{ width: "60%", height: "auto" }}
      />
    </div>
  );
}

export default Subtitulo;

