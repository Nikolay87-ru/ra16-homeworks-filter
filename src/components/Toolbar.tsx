type ToolbarProps = {
  filters: string[];
  selected: string;
  onSelectFilter: (filter: string) => void;
};

export const Toolbar = ({ filters, selected, onSelectFilter }: ToolbarProps) => {
  return (
    <div className="flex flex-wrap gap-10">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-5 py-10 transition-colors ${
            selected === filter ? 'bg-gray-600 text-white' : 'bg-white hover:bg-gray-300'
          }`}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
