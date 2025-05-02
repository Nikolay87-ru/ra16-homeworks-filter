import React from 'react';

type ToolbarProps = {
  filters: string[];
  selected: string;
  onSelectFilter: (filter: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({filters, selected, onSelectFilter}) => {
  return (
    <div className='flex gap-10'><button></button></div>
  )
}

export default Toolbar;