import { useState, useEffect } from 'react';

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'start', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'work', label: 'Work' },
    { id: 'techstack', label: 'Tech' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize (desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const brandIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 512 512">
      <path fill="#ffffff" d="M241.24 303.94c-15.32-10.36-30.74-20.57-46.06-30.93c-2-1.38-3.43-1.48-5.5 0l-38.88 26.12C182 319.9 244 361.32 244 361.32v-53.79c0-1.22-1.55-2.78-2.76-3.59m-46.15-63.27q23.19-15.24 46.11-30.86a7.54 7.54 0 0 0 2.8-5.34v-51.7s-62 41.12-93.26 61.94c13.7 9.16 26.67 17.91 39.78 26.44c1.02.66 3.4.28 4.57-.48m74.75-31.32q23.71 16.07 47.63 31.82a4.3 4.3 0 0 0 3.83 0l39.76-26.47L268 152.48v53.35a4.8 4.8 0 0 0 1.84 3.52m-11.73 21.02a5.27 5.27 0 0 0-4.74.17c-4.82 3-9.47 6.2-14.17 9.35c-8.25 5.53-25.35 17-25.35 17l38.84 25.86a6.18 6.18 0 0 0 6.26.11l39-26s-34.07-22.66-39.84-26.49M141 237.12v39.61l29.62-19.84z" strokeWidth="1" stroke="#ffffff" />
      <path fill="#ffffff" d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224s224-100.29 224-224S379.71 32 256 32m139 265c0 5.78-2.65 9.86-7.51 13.09q-61.71 41-123.29 82.19c-5.85 3.92-11.17 3.75-17-.14q-61.17-41-122.63-81.67c-5.11-3.39-7.59-7.56-7.59-13.73V217c0-6.14 2.52-10.34 7.62-13.72c40.91-27.13 81.94-54.36 122.73-81.68c5.82-3.89 11.09-4 16.94-.09q61.54 41.21 123.26 82.19c4.68 3.11 7.45 6.95 7.45 12.66Z" strokeWidth="1" stroke="#ffffff" />
      <path fill="#ffffff" d="M316.25 273.23q-22.59 15.34-45.39 30.34c-2.41 1.58-2.89 3.31-2.86 6.19v51.34l93-62l-38.53-25.88c-2.3-1.61-3.89-1.57-6.22.01m53.75 3.45v-39.62l-29.59 19.87z" strokeWidth="1" stroke="#ffffff" />
    </svg>
  );

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 top-2 w-[95vw] max-w-[1440px] h-16 rounded-full shadow-lg transition-all duration-300 z-50 ${
        isScrolled || isMenuOpen ? 'bg-slate-900/60 backdrop-blur-md ring-2 ring-white/50' : 'bg-slate-900/60 backdrop-blur-md ring-2 ring-white/30'
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-3 py-1">
          {/* {brandIcon} */}
          <span className="text-white text-lg font-bold">samuel.O</span>
        </div>

        {/* Hamburger Icon (mobile) */}
        <div className="md:hidden relative">
          <input
            type="checkbox"
            id="navbar-control"
            className="absolute w-8 h-8 top-0 left-0 opacity-0 z-10 cursor-pointer"
            checked={isMenuOpen}
            onChange={() => setIsMenuOpen(!isMenuOpen)}
          />
          <div className="relative w-8 h-8 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              className={`absolute top-0 left-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            >
              <g fill="#fff" strokeWidth="0.5" stroke="#fff">
                <path d="M8 6.983a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zM7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m1 3.017a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" />
                <path fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clipRule="evenodd" />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              className={`absolute top-0 left-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            >
              <path fill="none" stroke="currentColor" strokeDasharray="12" strokeDashoffset="12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7">
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0" />
              </path>
            </svg>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`text-sm lg:text-base transition-colors hover:text-emerald-200 ${
                  activeSection === item.id ? 'text-white font-semibold' : 'text-white/80'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Placeholder for login (optional) */}
        {/* <div className="hidden md:block text-white/80 text-sm">Login</div> */}
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute left-0 right-0 top-full mt-2 bg-slate-900/90 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col py-4 px-6 gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left text-white/80 hover:text-white py-2"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;