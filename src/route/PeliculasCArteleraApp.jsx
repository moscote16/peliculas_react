import React, { useState, useEffect } from 'react';
import { services } from '../services/Services';
import { Link } from 'react-router-dom';


export const PeliculasCArteleraApp = () => {
    const [cartelera, setCartelera] = useState([]);

    useEffect(() => {
        const fetchCartelera = async () => {
            try {
                const peliculas = await services();
                setCartelera(peliculas);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCartelera();
    }, []);

    return (
        <div className="container">
        <h1 className="mt-4">🎬 Cartelera</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {cartelera.map(pelicula => (
                <div className="col" key={pelicula.id}>
                  <Link to={`/detalle/${pelicula.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="card">
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
    )
}



