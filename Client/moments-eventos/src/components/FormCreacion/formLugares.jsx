import { createPlaces } from "../../Redux/actions"
import { useDispatch } from "react-redux"
import {useState } from "react"
import axios from "axios";
import config from "../../config";

export default function FormularioLugares(){

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const dispatch = useDispatch();
  
    const initialForm={
      name: "",
      type: "",
      city: "",
      country: "",
      description: "",
      image: [],
      event: ""
    }
    const [places, setPlaces] = useState(initialForm)
    console.log("places", places)
    
    const handleNameChange = (e) => {
      const inputValue = e.target.value
      setPlaces({
        ...places,
        name: inputValue,
      });
    };
    const handleCityChange = (e) => {
        const inputValue = e.target.value
        setPlaces({
          ...places,
          city: inputValue,
        });
    };
    const handleCountryChange = (e) => {
        const inputValue = e.target.value
        setPlaces({
          ...places,
          country: inputValue,
        });
    };
    const handleTypeChange = (e) => {
        const inputValue = e.target.value
        setPlaces({
          ...places,
          type: inputValue,
        });
    };
    const handleDescriptionChange = (e) => {
        const inputValue = e.target.value
        setPlaces({
          ...places,
          description: inputValue,
        });
    };
    const handleEventChange = (e) => {
        const inputValue = e.target.value
        setPlaces({
          ...places,
          event: inputValue,
        });
    };
    const handleSelectFile = (e) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    };
  
    // const handleUpload = async () => {
    //     if (!file) {
    //       console.log("No hay archivo seleccionado.");
    //       return;
    //     }
      
    //     try {
    //       setLoading(true);
    //       const data = new FormData();
    //       data.append("my_file", file);
    //       const response = await axios.post("/places/create_places", data);
    //       console.log("Respuesta del servidor:", response);
    //       setPlaces({ ...places, image: response.data.url });
    //       setImageUrl(response.data.url);
    //       setShowDeleteButton(true);
    //     } catch (error) {
    //       console.error("Error durante la subida:", error);
    //       if (error.response) {
    //         // El servidor respondió con un código de estado diferente de 2xx
    //         console.error("Error en la respuesta del servidor:", error.response.data);
    //         console.error("Código de estado:", error.response.status);
    //       } else if (error.request) {
    //         // La solicitud fue hecha pero no se recibió respuesta
    //         console.error("No se recibió respuesta del servidor:", error.request);
    //       } else {
    //         // Algo ocurrió al configurar la solicitud
    //         console.error("Error al configurar la solicitud:", error.message);
    //       }
    //       alert("Error al subir la imagen.");
    //     } finally {
    //       setLoading(false);
    //     }
    //   };


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
                <label className="form-label" htmlFor="type">Tipo de evento</label>
                <input
                type="text"
                id="type"
                name="type"
                className="form-control"
                value={places.event}
                onChange={handleEventChange}
                required
                />
            </div>
            <div className="form-group mb-4">
                <label className="form-label" htmlFor="type">Nombre del lugar:</label>
                <input
                type="text"
                id="type"
                name="type"
                className="form-control"
                value={places.name}
                onChange={handleNameChange}
                required
                />
            </div>
            <div className="form-group mb-4">
                <label className="form-label" htmlFor="type">Tipo de lugar</label>
                <input
                type="text"
                id="type"
                name="type"
                className="form-control"
                value={places.type}
                onChange={handleTypeChange}
                required
                />
            </div>
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="type">Ciudad</label>
            <input
              type="text"
              id="type"
              name="type"
              className="form-control"
              value={places.city}
              onChange={handleCityChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="type">País</label>
            <input
              type="text"
              id="type"
              name="type"
              className="form-control"
              value={places.country}
              onChange={handleCountryChange}
              required
            />
          </div>
         
          {/* Description input */}
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="description">Descripción</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              rows="4"
              value={places.description}
              onChange={handleDescriptionChange}
              required
            />
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
              Crear Lugar
            </button>
          </div>
        </form>
      </div>
    );
}