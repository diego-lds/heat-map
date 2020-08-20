import React, { useEffect, useState } from 'react';
import './App.css';
import HeatMap from './components/HeatMap';
import api from './api/residences';

const addressPoints = [
  [-27.5970, -48.5250, "8.0"],
  [-27.5970, -48.5250, "1.0"],
  [-27.5968, -48.5248, "2.0"],
  [-27.5966, -48.5246, "3.0"],
  [-27.5964, -48.5244, "4.0"],
  [-27.5962, -48.5242, "5.0"],
  [-27.5960, -48.5240, "6.0"],
  [-27.5958, -48.5238, "7.0"],
  [-27.5956, -48.5236, "8.0"],
  [-27.5954, -48.5234, "9.0"],
  [-27.5952, -48.5232, "10.0"],
]
const parsePoints = ({
  lat,
  lng,
  residentsQuantity
}) => ([lat, lng, parseFloat(residentsQuantity)]);

const App = () => {

  const [points, setPoints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/residences');
      setPoints(response.data.map(parsePoints));
    }
    fetchData();
  }, [])

  return (
    <>
      <HeatMap points={points} />
    </>
  );
}

export default App;
