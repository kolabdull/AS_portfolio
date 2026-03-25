import { useState } from 'react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCardClick = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 transition-all duration-500 hover:-translate-y-1 ${project.link ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        {project.image && !imageError ? (
          <>
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <img
              src={project.image}
              alt={project.name}
              className={`w-full h-full object-cover transition-transform duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${isHovered ? 'scale-105' : 'scale-100'}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-4xl font-light">
            {project.name.charAt(0)}
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-4">
            {project.link && (
              <span className="px-5 py-2 bg-white text-black text-sm font-medium rounded-sm hover:bg-gray-100 transition-colors">
                View Project →
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-medium text-gray-900 mb-2">{project.name}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-mono rounded-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;