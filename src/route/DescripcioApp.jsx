import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Detalle } from '../services/Services';

export const DescripcioApp = () => {
  const { id } = useParams(); 
  const [detalle, setDetalle] = useState(null);

  useEffect(() => {
    const fetchDetalle = async () => {
      try {
        const data = await Detalle(id); 
        setDetalle(data);
      } catch (error) {
        console.error('Error fetching detalle:', error);
      }
    };

    fetchDetalle();
  }, [id]); 

  if (!detalle) {
    return <div className="container">Cargando detalle...</div>; 
  }

  return (
    <div className="container">
      <h1 className="my-4">Detalle de la película</h1>
      <div className="row">
        <div className="col-md-4">
          <img src={detalle.imageUrl} alt={detalle.title} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h2 className="my-3">{detalle.title}</h2>
          <p className="lead"> <strong> Descripción:</strong> {detalle.overview}</p>
          <p> <strong> Fecha de lanzamiento: </strong> {detalle.release_date.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
