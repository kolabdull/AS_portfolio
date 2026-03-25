const SectionTitle = ({ children, subtitle }) => (
  <div className="mb-16 text-left md:text-center">
    <div className="flex items-center gap-2 text-gray-400 text-sm font-mono mb-4">
      <span className="w-8 h-px bg-gray-300" />
      <span>{subtitle || '//'}</span>
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-gray-900">
      {children}
    </h2>
  </div>
);

export default SectionTitle;