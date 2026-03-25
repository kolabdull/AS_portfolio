const ExperienceCard = ({ experience }) => {
  return (
    <div className="group border-t border-gray-200 py-8 first:border-t-0">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium text-gray-900">{experience.role}</h3>
          <p className="text-gray-500 font-mono text-sm mt-1">{experience.company}</p>
        </div>
        <div className="text-sm text-gray-400 font-mono">{experience.period}</div>
      </div>
      <p className="text-gray-600 mt-4">{experience.description}</p>
      <ul className="mt-4 space-y-2">
        {experience.achievements.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-500 text-sm">
            <span className="text-gray-300">—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;