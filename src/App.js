import React from 'react';
import './App.css';
import HeatMap from './components/HeatMap';

const addressPoints = [
  [-27.5970, -48.5250, "8.0"],
  [-27.5970, -48.5250, "2.0"],
  [-27.5968, -48.5248, "4.0"],
  [-27.5966, -48.5246, "6.0"],
  [-27.5964, -48.5244, "8.0"],
  [-27.5962, -48.5242, "10.0"],
  [-27.5960, -48.5240, "12.0"],
  [-27.5958, -48.5238, "14.0"],
  [-27.5956, -48.5236, "16.0"],
  [-27.5954, -48.5234, "18.0"],
  [-27.5952, -48.5232, "20.0"],
]

function App() {
  return (
    <HeatMap points={addressPoints} />
  );
}

export default App;
