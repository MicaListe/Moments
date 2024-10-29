import { createPlaces } from "../../Redux/actions"
import { useDispatch } from "react-redux"
import {useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import config from "../../config";
import ValidationPlaces from "./ValidationPlaces";
import dinosaurio from "../../assets/dinosaurioError.png"

export default function FormularioLugares(){

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const initialForm={
      name: "",
      type: "",
      city: "",
      country: "",
      description: "",
      image: [],
      event: ""
    }

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

    const [places, setPlaces] = useState(initialForm)
    const [errors, setErrors] = useState({})

    const handleNameChange = (e) => {

      const {name,value} = e.target
      setPlaces({
        ...places,
        [name]: value,
      });

      const validationErrors = ValidationPlaces({...places, [name]:value})
      setErrors(validationErrors)
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

        const response = await axios.post(`https://api.cloudinary.com/v1_1/${config.CLOUDINARY_CLOUD_NAME}/image/upload/`,
          data,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
        );
  
        if (response.data && response.data.secure_url) {
          setPlaces({ ...places, image: response.data.url });
          setImageUrl(response.data.url);
          setPlaces({ ...places, image: [...places.image, response.data.secure_url] }); // Actualiza el array de imágenes correctamente
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
      setPlaces({ ...places, image: "" });
      setShowDeleteButton(false);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createPlaces(places));
      setPlaces(initialForm);
      setImageUrl(null);
      setShowDeleteButton(false);
      window.alert("Lugar creado exitosamente")
    };
  
    return (
      <div className="container p-4 border rounded shadow-sm" style={{ maxWidth: '40rem', marginTop: '3rem' }}>
        <h2 className="text-center mb-4">Crear Lugar</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="type">Tipo de evento (Ej: boda, baustismo):</label>
              <input
                type="text"
                id="event"
                name="event"
                className="form-control"
                value={places.event}
                onChange={handleNameChange}
                required
              />
              <span style={{fontSize:"10px", color:"red"}}>
                {errors.event}
              </span>
            </div>
            <div className="form-group mb-4">
                <label className="form-label" htmlFor="type">Nombre del lugar:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={places.name}
                  onChange={handleNameChange}
                  required
                />
                <span style={{fontSize:"10px", color:"red"}}>
                  {errors.name}
                </span>
            </div>
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="type">Tipo de lugar (Ej: salón, quinta, playa):</label>
              <input
                type="text"
                id="places"
                name="type"
                className="form-control"
                value={places.type}
                onChange={handleNameChange}
                required
              />
              <span style={{fontSize:"10px", color:"red"}}>
                {errors.type}
              </span>
            </div>
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="type">Ciudad:</label>
            <input
              type="text"
              id="city"
              name="city"
              className="form-control"
              value={places.city}
              onChange={handleNameChange}
              required
            />
            <span style={{fontSize:"10px", color:"red"}}>
              {errors.city}
            </span>
          </div>
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="type">País:</label>
            <input
              type="text"
              id="country"
              name="country"
              className="form-control"
              value={places.country}
              onChange={handleNameChange}
              required
            />
            <span style={{fontSize:"10px", color:"red"}}>
              {errors.country}
            </span>
          </div>
         
          {/* Description input */}
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="description">Descripción:</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              rows="4"
              value={places.description}
              onChange={handleNameChange}
              required
            />
            <span style={{fontSize:"10px", color:"red"}}>
              {errors.description}
            </span>
          </div>
  
          {/* File input */}
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="fileUpload">Seleccionar Imagen:</label>
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
              Crear Lugar
            </button>
          </div>
        </form>
      </div>
    );
}