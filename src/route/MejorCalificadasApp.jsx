import React, { useState, useEffect } from 'react';
import { MejorCalificadas } from '../services/Services';
import { Link } from 'react-router-dom';
import './MejorCalificadasApp.css'; 

export const MejorCalificadasApp = () => {
    const [calificadas, setCalificadas] = useState([]);

    useEffect(() => {
        const fetchCalificadas = async () => {
            try {
                const peliculas = await MejorCalificadas();
                setCalificadas(peliculas);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCalificadas();
    }, []);
    
    return (
        <div className="container">
            <h1 className="mt-4">🎬 Mejor Calificadas</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {calificadas.map((pelicula, index) => (
                    <div className="col" key={pelicula.id}>
                        <Link to={`/detalle/${pelicula.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className={`card card-animation-${index % 6}`}> 
                                <img src={pelicula.imageUrl} className="card-img-top" alt={pelicula.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{pelicula.title}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
