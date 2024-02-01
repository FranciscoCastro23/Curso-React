// App.js
import React, { useState, useEffect } from 'react';
import Tarjeta from '../tarjeta';
import Axios from "axios";

// Define el tipo de datosTarjeta
interface DatosTarjeta {
  _id: string;
  id: number;
  dateListed: string;
  title: string;
  description: string;
  salePrice: number;
  thumbnailUrl: string;
  pictureUrl: string;
  location: string;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  yearBuilt: number;
  __v: number;
}

const App = () => {
  const [datosTarjeta, setDatosTarjeta] = useState<DatosTarjeta[] | null>(null);

  useEffect(() => {
    // Hacer la llamada a la API usando Axios
    Axios.get<DatosTarjeta[]>('https://bienes-raices-api-msps.onrender.com/bienes-raices')
      .then(({ data }) => setDatosTarjeta(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div>
      {datosTarjeta !== null && datosTarjeta.length > 0 ? (
        datosTarjeta.map((tarjeta) => (
          <Tarjeta
            key={tarjeta._id}  // Asegúrate de tener una clave única para cada tarjeta
            pictureUrl={tarjeta.pictureUrl}
            title={tarjeta.title}
            location={tarjeta.location}
            salePrice={tarjeta.salePrice}
            bedrooms={tarjeta.bedrooms}
            boton1="Learn More"
          />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};



export default App;
