import React, { useEffect, useState } from 'react';
import HeatMap from './components/HeatMap';
import Panel from './components/Panel';
import Toast from './components/Toast';
import api from './api/residences';
import idGenerator from './utils/idGenerator'
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const parsePoints = ({
  lat,
  lng,
  residentsQuantity
}) => ([lat, lng, parseFloat(residentsQuantity)]);

const App = () => {

  const [points, setPoints] = useState([]);
  const [mapPosition, setMapPosition] = useState([-27.5974, -48.5263])

  useEffect(() => {
    fetchResidences();
  }, [])

  const fetchResidences = async () => {
    const response = await api.get('/residences');
    setPoints(response.data.map(parsePoints));
  }

  const onSubmit = async (data, e) => {
    try {
      await api.post('/residences', {
        id: idGenerator(),
        number: parseInt(data.number),
        lat: parseFloat(data.lat),
        lng: parseFloat(data.lng),
        residentsQuantity: parseInt(data.residentsQuantity),
        zipCode: data.zipCode
      })
      fetchResidences();
      e.target.reset();
      toast.success('Cadastro realizado com sucesso!');
    } catch (e) {
      toast.error(`Erro ao cadastrar: [ ${e.message} ] `);

    }
  }

  const handleClick = e => {
    const {
      lat,
      lng
    } = e.latlng;
    setMapPosition([
      Number.parseFloat(lat.toFixed(4)),
      Number.parseFloat(lng.toFixed(4))
    ])
  }

  return (
    <>
      <div className='container'>
        <div className='panel'>
          <Panel
            onSubmit={onSubmit}
            latLng={[mapPosition[0], mapPosition[1]]}
          />
          <Toast />
        </div>
        <div className='map'>
          <HeatMap
            points={points}
            center={mapPosition}
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}

export default App;
