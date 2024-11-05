const projects = [
    {
      name: "Projeto 1",
      description: "Descrição do Projeto 1",
      link: "https://github.com/mayconsr/projeto1"
    },
    {
      name: "Projeto 2",
      description: "Descrição do Projeto 2",
      link: "https://github.com/mayconsr/projeto2"
    }
  ];
  
  const Projects = () => (
    <section id="projects" className="py-20 bg-gray-100 text-center">
      <h2 className="text-2xl mb-8">Projetos</h2>
      <div className="grid p-4 gap-4 grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-white shadow rounded">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-700">{project.description}</p>
            <a href={project.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">
              Ver mais
            </a>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Projects;
  