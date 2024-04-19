

export const services = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO');
      if (!response.ok) {
        throw new Error('Error al obtener los datos de la API');
      }
      const data = await response.json();
      const Pelis = data.results.map(pelicula => ({
        ...pelicula,
        release_date: new Date(pelicula.release_date),
        imageUrl: `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`
      }));
      return Pelis;
    } catch (error) {
      console.log(error);
      throw error; 
    }
  };

  export const MejorCalificadas = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO');
      if (!response.ok) {
        throw new Error('Error al obtener los datos de la API');
      }
      const data = await response.json();
      const Pelis = data.results.map(pelicula => ({
        ...pelicula,
        release_date: new Date(pelicula.release_date),
        imageUrl: `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`
      }));
      return Pelis;
    } catch (error) {
      console.log(error);
      throw error; 
    }
  };

  export const Estrenos = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO');
      if (!response.ok) {
        throw new Error('Error al obtener los datos de la API');
      }
      const data = await response.json();
      const Pelis = data.results.map(pelicula => ({
        ...pelicula,
        release_date: new Date(pelicula.release_date),
        imageUrl: `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`
      }));
      return Pelis;
    } catch (error) {
      console.log(error);
      throw error; 
    }
  };


  export const Detalle = async (id) => {
    try {
       
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`);
        if (!response.ok) {
            throw new Error('Error al obtener los datos de la API');
        }
        const data = await response.json();
        const pelicula = {
            id: data.id,
            title: data.title,
            release_date: new Date(data.release_date),
            imageUrl: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
            overview: data.overview,
        };
        return pelicula;
    } catch (error) {

        console.log(error);
        throw error;
    }
  };
 
  