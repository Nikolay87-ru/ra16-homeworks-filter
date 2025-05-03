type Project = {
  img: string;
  category: string;
};

type ProjectListProps = {
  projects: Project[];
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="border overflow-hidden shadow-md">
          <img src={project.img} alt={project.category} className="w-full h-48 object-cover" />
          <div className="p-3 bg-gray-50">
            <span className="text-sm text-gray-600">{project.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
