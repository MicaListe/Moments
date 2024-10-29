import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { createDecoration } from "../../Redux/actions";
import config from "../../config";
import axios from "axios";
import ValidationDeco from "./ValidationDeco";
import dinosaurio from "../../assets/dinosaurioError.png"

export default function FormDeco() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialForm = {
    type: '',
    description: '',
    image: []
  };

  const location = useLocation();

  // Comprobar si el usuario tiene autorización
  const isAuthorized = location.state && location.state.fromButton;
      if (!isAuthorized) {
        return <div className="alert alert-danger text-center" role="alert" style={{ marginTop: '20px', fontSize:"20px" }}>
        Error: No tienes permiso para acceder a esta página.
        <div>
          <img src={dinosaurio} alt="Dinosaurio" style={{ marginTop: '10px', maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
      }

  const [decoracion, setDecoracion] = useState(initialForm);
  const [errors, setErrors]= useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDecoracion({
      ...decoracion,
      [name]: value,
    });

    const validationsErrors=ValidationDeco({...decoracion, [name]:value})
    setErrors(validationsErrors)
  };

  const handleSelectFile = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
        setLoading(true);
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", config.CLOUDINARY_UPLOAD_PRESET);
        data.append("api_key", config.CLOUDINARY_API_KEY); 

        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${config.CLOUDINARY_CLOUD_NAME}/image/upload/`,
            data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );

        console.log("response", response);
        console.log("response.data", response.data.secure_url);

        if (response.data && response.data.secure_url) {
            setDecoracion({ ...decoracion, image: response.data.url });
            setImageUrl(response.data.url);
            setDecoracion({ ...decoracion, image: [...decoracion.image, response.data.secure_url] }); // Actualiza el array de imágenes correctamente
            setShowDeleteButton(true);
        } else {
            console.error('La respuesta no contiene una URL.');
        }

        alert("Imagen subida");
    } catch (error) {
        console.error('Error al subir la imagen:', error.response?.data || error.message);
        alert("Error al subir la imagen.");
    } finally {
        setLoading(false);
    }
};


  const handleDeleteImage = () => {
    setImageUrl(null);
    setDecoracion({ ...decoracion, image: "" });
    setShowDeleteButton(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (decoracion.type === '' || decoracion.description === '' || decoracion.image.length === 0){
      window.alert("Por favor complete todos los campos")
      return
    }
    dispatch(createDecoration(decoracion));
    setDecoracion(initialForm);
    setImageUrl(null);
    setShowDeleteButton(false);
    window.alert("Decoración creada exitosamente")
  };

  return (
    <div className="container p-4 border rounded shadow-sm" style={{ maxWidth: '40rem', marginTop: '3rem' }}>
      <h2 className="text-center mb-4">Crear Decoración</h2>
      <form onSubmit={handleSubmit}>

        {/* Type input */}
        <div className="form-group mb-4">
          <label className="form-label" htmlFor="type">Tipo de evento</label>
          <input
            type="text"
            id="type"
            name="type"
            className="form-control"
            value={decoracion.type}
            onChange={handleChange}
            required
          />
          <span style={{fontSize:"10px", color:"red"}}>
            {errors.type}
          </span>
        </div>

        {/* Description input */}
        <div className="form-group mb-4">
          <label className="form-label" htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            rows="4"
            value={decoracion.description}
            onChange={handleChange}
            required
          />
          <span style={{fontSize:"10px", color:"red"}}>
            {errors.description}
          </span>
        </div>

        {/* File input */}
        <div className="form-group mb-4">
          <label className="form-label" htmlFor="fileUpload">Seleccionar Imagen</label>
          <input
            type="file"
            id="fileUpload"
            className="form-control"
            accept="image/*"
            onChange={handleSelectFile}
          />
        </div>

        {/* Upload button */}
        <div className="text-center mb-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? "Subiendo..." : "Subir Imagen"}
          </button>
        </div>

        {/* Display uploaded image */}
        {imageUrl && (
          <div className="text-center mb-4">
            <img src={imageUrl} alt="Uploaded" className="img-fluid rounded" style={{ maxHeight: '200px' }} />
          </div>
        )}

        {/* Delete button */}
        {showDeleteButton && (
          <div className="text-center mb-4">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDeleteImage}
            >
              Eliminar Imagen
            </button>
          </div>
        )}

        {/* Submit button */}
        <div className="text-center">
          <button type="submit" className="btn btn-success">
            Crear Decoración
          </button>
        </div>
      </form>
    </div>
  );
}
