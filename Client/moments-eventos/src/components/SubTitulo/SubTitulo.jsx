import React from "react";
import subtitle from "../../assets/frase.png";

function Subtitulo() {
  return (
    <div className="container-fluid text-center ">
      <img
        src={subtitle}
        className="img-fluid"
        alt="Subtítulo"
        style={{ width: "40%", height: "auto" }}
      />
    </div>
  );
}

export default Subtitulo;

