import { useState } from 'react';
import { Toolbar } from './components/Toolbar';

export function App() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];

  const handleFilterSelect = (filter: string) => {
    console.log('Выбран фильтр:', filter);
    setSelectedFilter(filter);
  };

  return (
    <div className="mx-60 my-10">
      <Toolbar filters={filters} selected={selectedFilter} onSelectFilter={handleFilterSelect} />
    </div>
  );
}
