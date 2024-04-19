import React, { useState, useEffect } from 'react';
import { Estrenos } from '../services/Services';   
import { Link } from 'react-router-dom';
import './EstrenosApp.css'; 

export const EstrenosApp = () => {
    const [estrenos, setEstrenos] = useState([]);

    useEffect(() => {
        const fetchEstrenos = async () => {
            try {
                const peliculas = await Estrenos();
                setEstrenos(peliculas);
            } catch (error) {
                console.log(error);
            }
        };

        fetchEstrenos();
    }, []);

    return (
        <div className="container">
            <h1 className="mt-4">🎬 Estrenos</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {estrenos.map((pelicula, index) => (
                    <div className="col" key={pelicula.id}>
                        <Link to={`/detalle/${pelicula.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className={`card card-animation-${index % 4}`}> 
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
