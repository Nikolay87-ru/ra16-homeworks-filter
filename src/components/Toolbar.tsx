type ToolbarProps = {
  filters: string[];
  selected: string;
  onSelectFilter: (filter: string) => void;
};

export const Toolbar = ({ filters, selected, onSelectFilter }: ToolbarProps) => {
  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      {filters.map((filter) => (
        <button
          key={filter}
          style={{
            padding: '8px 16px',
            background: selected === filter ? '#3b82f6' : '#e5e7eb',
            color: selected === filter ? 'white' : 'black',
            border: 2,
            cursor: 'pointer',
          }}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
