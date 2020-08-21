import React, { useEffect, useState } from 'react';
import HeatMap from './components/HeatMap';
import Panel from './components/Panel';
import Toast from './components/Toast';
import api from './api/residences';
import idGenerator from './utils/idGenerator'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import parserPoints from './utils/parserPoints';

const App = () => {

  const [points, setPoints] = useState([]);
  const [mapPosition, setMapPosition] = useState([-27.5974, -48.5263])

  useEffect(() => {
    fetchResidences();
  }, [])

  const fetchResidences = async () => {
    try {
      const response = await api.get('/residences');
      setPoints(response.data.map(parserPoints));
    } catch (e) {
      toast.error('Erro ao baixar os dados!')
    }
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
      e.target.reset();
      toast.success('Cadastro realizado com sucesso!');
      fetchResidences();
    } catch (e) {
      toast.error(`Erro ao cadastrar: [ ${e.message} ] `);
    }
  }

  const getPosition = position => {
    console.log(position.lat, position.lng)
    setMapPosition([
      Number.parseFloat(position.lat.toFixed(4)),
      Number.parseFloat(position.lng.toFixed(4))
    ])
  }

  return (
    <>
      <div className='container'>
        <div className='panel'>
          <Panel
            onSubmit={onSubmit}
            markerPosition={[mapPosition[0], mapPosition[1]]}
          />
          <Toast />
        </div>
        <div className='map'>
          <HeatMap
            points={points}
            center={mapPosition}
            getPosition={getPosition}
          />
        </div>
      </div>
    </>
  );
}

export default App;
