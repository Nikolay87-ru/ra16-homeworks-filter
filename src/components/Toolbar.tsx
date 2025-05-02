type ToolbarProps = {
  filters: string[];
  selected: string;
  onSelectFilter: (filter: string) => void;
};

export const Toolbar = ({ filters, selected, onSelectFilter }: ToolbarProps) => {
  return (
    <div className="flex gap-10">
      {filters.map((filter) => (
        <button key={filter}>{filter}</button>
      ))}
    </div>
  );
};

 
