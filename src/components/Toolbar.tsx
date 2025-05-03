type ToolbarProps = {
  filters: string[];
  selected: string;
  onSelectFilter: (filter: string) => void;
};

export const Toolbar = ({ filters, selected, onSelectFilter }: ToolbarProps) => {
  return (
    <div className="flex gap-2 mb-4">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-4 py-1 border border-black font-bold ${
            selected === filter
              ? 'bg-gray-700 text-white'
              : 'bg-white text-gray-500 hover:bg-gray-300'
          }`}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
