// ImagePage.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css'; // Asegúrate de que los estilos están importados aquí

const ImagePage = () => {
  const location = useLocation();
  const { uploadedImageUrl, name } = location.state || {}; // Extrae también el nombre

  return (
    <div className="App">
      <div className="card-container">
        <div className="card">
          {uploadedImageUrl ? (
            <>
              <img src={uploadedImageUrl} alt="Uploaded file" className="card-image" />
              <p className="card-title">{name}</p> {/* Muestra el nombre aquí */}
            </>
          ) : (
            <p>No image to display.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
