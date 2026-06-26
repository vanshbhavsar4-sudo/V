function ProjectCard({ project }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-cyan-400">{project.title}</h3>
      <p className="mt-3 text-gray-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span key={item} className="bg-slate-700 px-3 py-1 rounded-full text-sm">
            {item}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        className="mt-6 inline-block text-cyan-400 hover:underline"
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
