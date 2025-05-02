import { useState } from 'react';
import { Toolbar } from './components/Toolbar';

export function App() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const filters = ['All', 'Websites', 'Business Cards', 'Flayers'];

  const handleFilterSelect = (filter: string) => {
    console.log('Выбран фильтр:', filter);
    setSelectedFilter(filter);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Toolbar</h1>
      <Toolbar
        filters={filters}
        selected={selectedFilter}
        onSelectFilter={handleFilterSelect}
      />
      <p>Текущий фильтр: <strong>{selectedFilter}</strong></p>
    </div>
  );
}


 
