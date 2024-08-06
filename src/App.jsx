// UploadForm.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirigir
import './App.css'; // Asegúrate de que los estilos están importados aquí

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const navigate = useNavigate(); // Inicializa useNavigate

  const url = 'http://localhost:8000/api';

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const preview = URL.createObjectURL(selectedFile);
    setPreviewUrl(preview);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('productImage', file);

    try {
      const response = await fetch(url + '/products', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response data:', data);

      navigate('/image', { state: { uploadedImageUrl: data.url, name } }); // Navega a la página de imagen con el nombre y URL

      URL.revokeObjectURL(previewUrl);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />
        <button type="submit">Upload</button>
      </form>
      <div>
        <p>Selected file preview:</p>
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Selected file"
            style={{ maxWidth: '100%', maxHeight: '300px' }}
          />
        )}
      </div>
    </div>
  );
};

export default UploadForm;
