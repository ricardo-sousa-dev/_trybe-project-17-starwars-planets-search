import React from 'react';
import './App.css';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';

function App() {
  return (
    <PlanetProvider>
      <Table name="Luiz" />
    </PlanetProvider>
  );
}
export default App;
