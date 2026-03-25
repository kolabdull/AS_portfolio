const TechStack = () => {
  const techCategories = [
    {
      title: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "C++", "SQL"]
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Backend",
      items: ["Node.js", "FastAPI", "Express"]
    },
    {
      title: "Data Science",
      items: ["TensorFlow", "PyTorch", "Pandas", "Scikit-learn", "NumPy"]
    },
    {
      title: "DevOps & Cloud",
      items: ["Docker", "AWS", "Kubernetes", "CI/CD"]
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "Supabase", "Redis", "Firebase"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {techCategories.map((category) => (
        <div key={category.title} className="border-t border-gray-200 pt-6">
          <h3 className="text-sm font-mono text-gray-500 mb-4">{category.title}</h3>
          <div className="flex flex-wrap gap-3">
            {category.items.map((item) => (
              <span key={item} className="text-gray-700 text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;