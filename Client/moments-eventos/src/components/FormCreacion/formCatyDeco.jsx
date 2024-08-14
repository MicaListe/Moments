import React, { useState } from "react";
import axios from "axios";

export default function FormCatyDeco() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const initialForm = {
    name: '',
    description: '',
    image: []
  };
  
  const [producto, setProducto] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({
      ...producto,
      [name]: value,
    });
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
      data.append("my_file", file);
      const response = await axios.post(
        "http://localhost:5000/upload",
        data
      );
      setRes(response.data.url);
      setImageUrl(response.data.url);
      setShowDeleteButton(true);
    } catch (error) {
      alert("Error al subir la imagen.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteImage = () => {
    setImageUrl(null);
    setRes("");
    setShowDeleteButton(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        name: producto.name,
        description: producto.description,
        image: res
      };
      const response = await axios.post("http://localhost:5000/products", productData);
      console.log("Producto guardado:", response.data);
      setProducto(initialForm);
      setImageUrl(null);
      setRes("");
      setShowDeleteButton(false);
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
  };

  return (
    <div className="container p-4 border rounded shadow-sm" style={{ maxWidth: '40rem', marginTop: '3rem' }}>
      <h2 className="text-center mb-4">Crear Catering</h2>
      <form onSubmit={handleSubmit}>

        {/* Name input */}
        <div className="form-group mb-4">
          <label className="form-label" htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={producto.name}
            onChange={handleChange}
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
            value={producto.description}
            onChange={handleChange}
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
            Crear Producto
          </button>
        </div>
      </form>
    </div>
  );
}
