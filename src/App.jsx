// import React, { useState, useEffect, useRef } from 'react';
// import adcomatImage from './assets/adcomat.png';
// import naijalistImage from './assets/naijalist.png';
// import anniekukuImage from './assets/anniekuku.png';
// import punpoetsImage from './assets/punpoets.png';

// // Matrix Rain Background Component
// const MatrixRain = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
    
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const charArray = chars.split('');
//     const fontSize = 14;
//     const columns = canvas.width / fontSize;
//     const drops = Array(Math.floor(columns)).fill(1);

//     const draw = () => {
//       ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//       ctx.fillStyle = '#00ff4180';
//       ctx.font = `${fontSize}px monospace`;

//       for (let i = 0; i < drops.length; i++) {
//         const text = charArray[Math.floor(Math.random() * charArray.length)];
//         ctx.fillText(text, i * fontSize, drops[i] * fontSize);
//         if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//           drops[i] = 0;
//         }
//         drops[i]++;
//       }
//     };

//     const interval = setInterval(draw, 50);
    
//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => {
//       clearInterval(interval);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 pointer-events-none opacity-30"
//       style={{ zIndex: 0 }}
//     />
//   );
// };

// // Typing Animation Component
// const TypeWriter = ({ texts, speed = 150, deleteSpeed = 75, delay = 2000 }) => {
//   const [displayText, setDisplayText] = useState('');
//   const [textIndex, setTextIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentText = texts[textIndex];
    
//     const timeout = setTimeout(() => {
//       if (!isDeleting) {
//         if (displayText.length < currentText.length) {
//           setDisplayText(currentText.slice(0, displayText.length + 1));
//         } else {
//           setTimeout(() => setIsDeleting(true), delay);
//         }
//       } else {
//         if (displayText.length > 0) {
//           setDisplayText(displayText.slice(0, -1));
//         } else {
//           setIsDeleting(false);
//           setTextIndex((prev) => (prev + 1) % texts.length);
//         }
//       }
//     }, isDeleting ? deleteSpeed : speed);

//     return () => clearTimeout(timeout);
//   }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, delay]);

//   return (
//     <span className="text-emerald-400">
//       {displayText}
//       <span className="animate-pulse text-emerald-500">|</span>
//     </span>
//   );
// };

// // Glitch Text Component
// const GlitchText = ({ children, className = '' }) => {
//   return (
//     <span className={`relative inline-block ${className}`}>
//       <span className="relative z-10">{children}</span>
//       <span className="absolute top-0 left-0.5 text-cyan-400 opacity-70 animate-pulse" style={{ clipPath: 'inset(0 0 50% 0)' }}>
//         {children}
//       </span>
//       <span className="absolute top-0 -left-0.5 text-red-400 opacity-70 animate-pulse" style={{ clipPath: 'inset(50% 0 0 0)', animationDelay: '0.1s' }}>
//         {children}
//       </span>
//     </span>
//   );
// };

// // Navigation Component
// const Navbar = ({ activeSection }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navItems = [
//     { id: 'start', label: 'Start' },
//     { id: 'education', label: 'Education' },
//     { id: 'work', label: 'My Work' },
//     { id: 'techstack', label: 'Tech Stack' },
//     { id: 'experience', label: 'Experience' },
//     { id: 'contact', label: 'Contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollTo = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-emerald-500/20' : 'bg-transparent'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <span className="font-mono text-xl font-bold text-emerald-400 tracking-wider">
//               &lt;<GlitchText>SO</GlitchText>/&gt;
//             </span>
//           </div>
          
//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="flex items-center space-x-1">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollTo(item.id)}
//                   className={`px-4 py-2 font-mono text-sm tracking-wide transition-all duration-300 relative group ${
//                     activeSection === item.id 
//                       ? 'text-emerald-400' 
//                       : 'text-gray-400 hover:text-emerald-400'
//                   }`}
//                 >
//                   <span className="relative z-10">{item.label}</span>
//                   <span className={`absolute inset-0 bg-emerald-500/10 rounded transform transition-all duration-300 ${
//                     activeSection === item.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'
//                   }`} />
//                   <span className="text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"> /&gt;</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-emerald-400 p-2"
//           >
//             <div className="w-6 h-5 flex flex-col justify-between">
//               <span className={`block h-0.5 bg-emerald-400 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
//               <span className={`block h-0.5 bg-emerald-400 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
//               <span className={`block h-0.5 bg-emerald-400 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
//         <div className="bg-black/95 backdrop-blur-lg border-b border-emerald-500/20 px-4 py-4 space-y-2">
//           {navItems.map((item, index) => (
//             <button
//               key={item.id}
//               onClick={() => scrollTo(item.id)}
//               className="block w-full text-left px-4 py-3 font-mono text-sm text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded transition-all duration-300"
//               style={{ animationDelay: `${index * 50}ms` }}
//             >
//               <span className="text-emerald-600">&gt; </span>{item.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// // Hero Section
// const HeroSection = () => {
//   const greetings = ['Hi', 'Hola', 'Bonjour', 'Hallo', 'Nnọọ', 'こんにちは', '안녕하세요', '你好', 'Olá', 'Привет', 'E káàárọ̀', 'Salve', 'Merhaba', 'Sawubona'];
//   const [greetingIndex, setGreetingIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const interval = setInterval(() => {
//       setGreetingIndex((prev) => (prev + 1) % greetings.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="start" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
//       {/* Animated Grid */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'linear-gradient(to right, #00ff4110 1px, transparent 1px), linear-gradient(to bottom, #00ff4110 1px, transparent 1px)',
//           backgroundSize: '50px 50px'
//         }} />
//       </div>

//       {/* Scan Line Effect */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent animate-scan" />
//       </div>

//       <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="mb-6">
//           <span className="inline-block px-4 py-2 border border-emerald-500/30 rounded-full font-mono text-sm text-emerald-400 bg-emerald-500/5">
//             <span className="animate-pulse mr-2">●</span>
//             Available for opportunities
//           </span>
//         </div>

//         <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 font-mono">
//           <span 
//             key={greetingIndex}
//             className="inline-block text-emerald-400 animate-fadeIn"
//           >
//             {greetings[greetingIndex]}
//           </span>
//           <span className="text-gray-400">,</span>
//         </h1>
        
//         <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-4 font-mono">
//           I'm <GlitchText className="text-white font-bold">Samuel Ofoegbu</GlitchText>
//         </h2>
        
//         <div className="text-lg sm:text-xl md:text-2xl text-gray-400 font-mono mb-8">
//           <span className="text-emerald-600">&lt;</span>
//           <TypeWriter 
//             texts={[
//               'Software Developer',
//               'Data Scientist', 
//               'Problem Solver',
//               'Builder of Things'
//             ]} 
//           />
//           <span className="text-emerald-600">/&gt;</span>
//         </div>

//         <p className="text-gray-500 font-mono text-sm mb-12 max-w-lg mx-auto">
//           // I build stuff that matters
//         </p>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//           <button 
//             onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
//             className="group px-8 py-4 bg-emerald-500 text-black font-mono font-bold rounded hover:bg-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
//           >
//             View My Work
//             <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
//           </button>
//           <button 
//             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//             className="px-8 py-4 border border-emerald-500/50 text-emerald-400 font-mono rounded hover:bg-emerald-500/10 transition-all duration-300"
//           >
//             Get In Touch
//           </button>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-emerald-500/50 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-emerald-500 rounded-full mt-2 animate-pulse" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Section Title Component
// const SectionTitle = ({ children, subtitle }) => (
//   <div className="mb-16 text-center">
//     <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono mb-4">
//       <span className="text-emerald-600">&lt;</span>
//       <GlitchText className="text-white">{children}</GlitchText>
//       <span className="text-emerald-600">/&gt;</span>
//     </h2>
//     {subtitle && (
//       <p className="text-gray-500 font-mono text-sm">// {subtitle}</p>
//     )}
//   </div>
// );

// // Education Section
// const EducationSection = () => {
//   const education = [
//     {
//       degree: "Master's in Financial Engineering (in view)",
//       school: "World Quant University",
//       year: "2025 - 2027",
//       description: "Specialized in Deep Learning for Finance"
//     },
//     {
//       degree: "Bachelor's in Mathematics",
//       school: "University of Lagos (UNILAG)",
//       year: "2022 - 2025",
//       // description: "2:1, Focus on Full-Stack Development"
//     }
//   ];

//   return (
//     <section id="education" className="min-h-screen py-24 px-4 relative">
//       <div className="max-w-4xl mx-auto">
//         <SectionTitle subtitle="my academic journey">Education</SectionTitle>
        
//         <div className="relative">
//           {/* Timeline Line */}
//           <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent" />
          
//           {education.map((edu, index) => (
//             <div 
//               key={index}
//               className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
//             >
//               <div className="flex-1 md:text-right">
//                 <div className={`bg-gray-900/50 border border-emerald-500/20 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
//                   <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 font-mono text-xs rounded mb-3">
//                     {edu.year}
//                   </span>
//                   <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
//                   <p className="text-emerald-400 font-mono text-sm mb-2">{edu.school}</p>
//                   <p className="text-gray-400 text-sm">{edu.description}</p>
//                 </div>
//               </div>
              
//               {/* Timeline Dot */}
//               <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 -translate-x-1/2 bg-emerald-500 rounded-full border-4 border-black shadow-lg shadow-emerald-500/50" />
              
//               <div className="flex-1 hidden md:block" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


// // Project Card Component with Image Support
// const ProjectCard = ({ project, index }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [imageError, setImageError] = useState(false);

//   const handleCardClick = () => {
//     if (project.link) {
//       window.open(project.link, '_blank', 'noopener,noreferrer');
//     }
//   };

//   return (
//     <div
//       className={`group relative bg-gray-900/50 border border-emerald-500/20 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-2 ${project.link ? 'cursor-pointer' : ''}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={handleCardClick}
//       style={{ animationDelay: `${index * 100}ms` }}
//     >
//       {/* Project Image */}
//       <div className="relative h-48 overflow-hidden bg-gray-800">
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 z-10" />
        
//         {/* Actual Image */}
//         {project.image && !imageError ? (
//           <>
//             {!imageLoaded && (
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
//               </div>
//             )}
//             <img
//               src={project.image}
//               alt={project.name}
//               className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${isHovered ? 'scale-110' : 'scale-100'}`}
//               onLoad={() => setImageLoaded(true)}
//               onError={() => setImageError(true)}
//             />
//           </>
//         ) : (
//           /* Fallback - First Letter */
//           <div className="absolute inset-0 flex items-center justify-center">
//             <span className="text-6xl font-mono font-bold text-emerald-500/30">
//               {project.name.charAt(0)}
//             </span>
//           </div>
//         )}
        
//         {/* Hover Overlay with Buttons */}
//         <div className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-opacity duration-300 z-20 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
//           <div className="flex gap-4">
//             {project.link && (
//               <span className="px-4 py-2 bg-emerald-500 text-black font-mono text-sm rounded hover:bg-emerald-400 transition-colors flex items-center gap-2">
//                 View Live <span>→</span>
//               </span>
//             )}
//             {project.github && (
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onClick={(e) => e.stopPropagation()}
//                 className="px-4 py-2 border border-emerald-500 text-emerald-400 font-mono text-sm rounded hover:bg-emerald-500/10 transition-colors"
//               >
//                 Code
//               </a>
//             )}
//           </div>
//         </div>
        
//         {/* Project Type Badge */}
//         <div className="absolute top-3 left-3 z-30">
//           <span className={`px-2 py-1 text-xs font-mono rounded backdrop-blur-sm ${project.type === 'web' ? 'bg-cyan-500/30 text-cyan-400 border border-cyan-500/30' : 'bg-purple-500/30 text-purple-400 border border-purple-500/30'}`}>
//             {project.type === 'web' ? '🌐 Web' : '🤖 ML'}
//           </span>
//         </div>

//         {/* External Link Icon */}
//         {project.link && (
//           <div className="absolute top-3 right-3 z-30">
//             <span className={`w-8 h-8 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full text-emerald-400 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
//               ↗
//             </span>
//           </div>
//         )}
//       </div>
      
//       {/* Project Info */}
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
//           {project.name}
//           {project.link && (
//             <span className="text-emerald-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
//           )}
//         </h3>
//         <p className="text-gray-400 text-sm mb-4 line-clamp-2">
//           {project.description}
//         </p>
//         <div className="flex flex-wrap gap-2">
//           {project.tech.map((tech, i) => (
//             <span key={i} className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-mono rounded border border-emerald-500/20">
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Work Section
// const WorkSection = () => {
//   const [filter, setFilter] = useState('all');
  
//   const projects = [
//     {
//       name: "ADCOMAT",
//       type: "web",
//       description: "A comprehensive digital marketing automation platform that helps businesses manage their advertising campaigns efficiently.",
//       tech: ["React", "TypeScript", "Tailwind CSS"],
//       link: "https://adcomat.vercel.app/",
//       image: adcomatImage,
//       github: null
//     },
//     {
//       name: "NaijaList",
//       type: "web",
//       description: "Nigeria's premier classifieds and marketplace platform connecting buyers and sellers across the nation.",
//       tech: ["React", "JavaScript", "Tailwind CSS", "PostgreSQL", "Docker"],
//       link: "https://naija-list.vercel.app/",
//       image: naijalistImage,
//       github: null
//     },
//     {
//       name: "Anniekuku",
//       type: "web",
//       description: "An elegant e-commerce platform to discover handcrafted fine jewelry, designed to celebrate life's special moments with timeless elegance.",
//       tech: ["React", "JavaScript", "Tailwind CSS", "PostgreSQL", "Cloudinary"],
//       link: "https://anniekuku-frontend.vercel.app/",
//       image: anniekukuImage,
//       github: null
//     },
//     {
//       name: "Punpoets",
//       type: "web",
//       description: "A creative platform for poets and writers to share their work and connect with literary enthusiasts.",
//       tech: ["React", "Firebase", "Express", "Socket.io"],
//       link: "https://punpoets.vercel.app/",
//       image: punpoetsImage,
//       github: null
//     },
//     // {
//     //   name: "Sentiment Analyzer",
//     //   type: "ml",
//     //   description: "NLP model for real-time sentiment analysis of social media data with 94% accuracy.",
//     //   tech: ["Python", "TensorFlow", "BERT", "FastAPI"],
//     //   link: null,
//     //   image: "/images/sentiment.png",
//     //   github: null
//     // },
//     // {
//     //   name: "Price Predictor",
//     //   type: "ml",
//     //   description: "Machine learning model for predicting real estate prices using advanced regression techniques.",
//     //   tech: ["Python", "Scikit-learn", "Pandas", "Flask"],
//     //   link: null,
//     //   image: "/images/price-predictor.png",
//     //   github: null
//     // }
//   ];

//   const filteredProjects = filter === 'all' 
//     ? projects 
//     : projects.filter(p => p.type === filter);

//   return (
//     <section id="work" className="min-h-screen py-24 px-4 relative">
//       <div className="max-w-6xl mx-auto">
//         <SectionTitle subtitle="things I've built">My Work</SectionTitle>
        
//         {/* Filter Tabs */}
//         <div className="flex justify-center gap-4 mb-12 flex-wrap">
//           {['all', 'web', 'ml'].map((f) => (
//             <button
//               key={f}
//               onClick={() => setFilter(f)}
//               className={`px-6 py-2 font-mono text-sm rounded-full transition-all duration-300 ${
//                 filter === f 
//                   ? 'bg-emerald-500 text-black' 
//                   : 'border border-emerald-500/30 text-gray-400 hover:border-emerald-500 hover:text-emerald-400'
//               }`}
//             >
//               {f === 'all' ? 'All Projects' : f === 'web' ? '🌐 Web Apps' : '🤖 ML Models'}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProjects.map((project, index) => (
//             <ProjectCard key={project.name} project={project} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Tech Stack Section
// const TechStackSection = () => {
//   const techCategories = [
//     {
//       title: "Languages",
//       items: ["JavaScript", "C++", "Python", "TypeScript", "SQL"]
//     },
//     {
//       title: "Frontend",
//       items: ["React", "Next.js", "Tailwind CSS"]
//     },
//     {
//       title: "Backend",
//       items: ["Node.js", "FastAPI", "Express"]
//     },
//     {
//       title: "Data Science / Analysis",
//       items: ["TensorFlow", "PyTorch", "Pandas", "Scikit-learn", "NumPy", "PowerBI", "Excel", "Langchain"]
//     },
//     {
//       title: "DevOps & Cloud",
//       items: ["Docker", "AWS", "Kubernetes", "CI/CD"]
//     },
//     {
//       title: "Databases",
//       items: ["PostgreSQL", "Supabase", "Redis", "MySQL", "Firebase"]
//     }
//   ];

//   return (
//     <section id="techstack" className="min-h-screen py-24 px-4 relative overflow-hidden">
//       <div className="max-w-6xl mx-auto">
//         <SectionTitle subtitle="technologies I work with">Tech Stack</SectionTitle>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {techCategories.map((category, catIndex) => (
//             <div 
//               key={category.title}
//               className="group bg-gray-900/30 border border-emerald-500/20 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10"
//               style={{ animationDelay: `${catIndex * 100}ms` }}
//             >
//               <h3 className="text-lg font-bold text-emerald-400 font-mono mb-4 flex items-center gap-2">
//                 <span className="text-emerald-600">&gt;</span>
//                 {category.title}
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {category.items.map((item, itemIndex) => (
//                   <span 
//                     key={item}
//                     className="px-3 py-2 bg-black/50 text-gray-300 text-sm font-mono rounded border border-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 cursor-default"
//                     style={{ animationDelay: `${(catIndex * 5 + itemIndex) * 50}ms` }}
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Terminal Style Display */}
//         <div className="mt-16 bg-black/80 border border-emerald-500/30 rounded-lg overflow-hidden">
//           <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/50 border-b border-emerald-500/20">
//             <div className="w-3 h-3 rounded-full bg-red-500" />
//             <div className="w-3 h-3 rounded-full bg-yellow-500" />
//             <div className="w-3 h-3 rounded-full bg-green-500" />
//             <span className="ml-4 text-gray-500 font-mono text-sm">samuel@portfolio:~</span>
//           </div>
//           <div className="p-6 font-mono text-sm">
//             <p className="text-gray-400">
//               <span className="text-emerald-400">$</span> cat skills.json
//             </p>
//             <pre className="text-emerald-400 mt-2 overflow-x-auto">
// {`{
//   "core": ["JavaScript", "Python", "TypeScript"],
//   "frameworks": ["React", "Next.js", "FastAPI"],
//   "data": ["TensorFlow", "Pandas", "PowerBI"],
//   "passion": "Building solutions that matter"
// }`}
//             </pre>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Experience Section
// const ExperienceSection = () => {
//   const experiences = [
//     {
//       role: "Freelancer",
//       company: "Self-Employed",
//       period: "2025 - Present",
//       description: "Constantly building scalable web applications and ML-powered features.",
//       achievements: [
//         "Built Anniekuku - E-commerce jewelry platform",
//         "Built Vaxpal - Vaccination tracking app",
//         "Built Punpoets - Poetry sharing platform",
//         "Built ADCOMAT - Marketing automation tool",
//         "Built Naijalist - Nigerian marketplace"
//       ]
//     },
//     {
//       role: "Data Scientist",
//       company: "Waya Links",
//       period: "2025",
//       description: "Built and maintained data-driven solutions for fintech applications.",
//       achievements: [
//         "Delivered 15+ successful data projects",
//         "Implemented CI/CD pipelines",
//         "Increased test coverage to 85%"
//       ]
//     },
//     {
//       role: "Machine Learning Intern",
//       company: "Brainwave Matrix Solutions",
//       period: "2025",
//       description: "Developed ML models for business intelligence solutions.",
//       achievements: [
//         "Built prediction model with 92% accuracy",
//         "Automated reporting workflows",
//         "Reduced data processing time by 40%"
//       ]
//     },
//     {
//       role: "Data Analyst & Customer Success Intern",
//       company: "Great Place to Work",
//       period: "2024",
//       description: "Analyzed customer data and provided insights to improve customer success strategies.",
//       achievements: [
//         "Analyzed customer feedback data",
//         "Created automated reporting dashboards",
//         "Improved data processing efficiency"
//       ]
//     }
//   ];

//   return (
//     <section id="experience" className="min-h-screen py-24 px-4 relative">
//       <div className="max-w-4xl mx-auto">
//         <SectionTitle subtitle="where I've worked">Experience</SectionTitle>
        
//         <div className="space-y-8">
//           {experiences.map((exp, index) => (
//             <div 
//               key={index}
//               className="group relative bg-gray-900/30 border border-emerald-500/20 rounded-lg p-6 md:p-8 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10"
//             >
//               {/* Accent Line */}
//               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-cyan-500 rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              
//               <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
//                 <div>
//                   <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
//                     {exp.role}
//                   </h3>
//                   <p className="text-emerald-400 font-mono text-sm">{exp.company}</p>
//                 </div>
//                 <span className="text-gray-500 font-mono text-sm mt-2 md:mt-0">
//                   {exp.period}
//                 </span>
//               </div>
              
//               <p className="text-gray-400 mb-4">{exp.description}</p>
              
//               <ul className="space-y-2">
//                 {exp.achievements.map((achievement, i) => (
//                   <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
//                     <span className="text-emerald-500 mt-1">▹</span>
//                     {achievement}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Contact Section
// const ContactSection = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
//   const socialLinks = [
//     { name: 'GitHub', icon: '⌘', url: 'https://github.com/Samm-OB' },
//     { name: 'LinkedIn', icon: '◉', url: 'https://www.linkedin.com/in/samuel-ofoegbu-873116182/' },
//     { name: 'Twitter', icon: '✦', url: 'https://x.com/say_s1m' },
//     { name: 'Email', icon: '✉', url: 'mailto:smlofoegbu@gmail.com' }
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here (EmailJS, Formspree, etc.)
//     console.log('Form submitted:', formData);
//     alert('Thanks for your message! I\'ll get back to you soon.');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <section id="contact" className="min-h-screen py-24 px-4 relative">
//       <div className="max-w-4xl mx-auto">
//         <SectionTitle subtitle="let's work together">Contact</SectionTitle>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div>
//             <p className="text-gray-400 mb-8 text-lg">
//               Have a project in mind or just want to chat? I'm always open to discussing new opportunities and ideas.
//             </p>
            
//             <div className="space-y-4 mb-8">
//               {socialLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-4 p-4 bg-gray-900/30 border border-emerald-500/20 rounded-lg hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300 group"
//                 >
//                   <span className="text-2xl">{link.icon}</span>
//                   <span className="text-gray-300 group-hover:text-emerald-400 transition-colors font-mono">
//                     {link.name}
//                   </span>
//                   <span className="ml-auto text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
//                     →
//                   </span>
//                 </a>
//               ))}
//             </div>

//             {/* Download CV Button */}
//             <a
//               href="/SAMUEL_OFOEGBU_cv__2_.pdf"
//               download
//               className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black font-mono font-bold rounded hover:bg-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
//             >
//               <span>↓</span>
//               Download CV
//             </a>
//           </div>
          
//           {/* Contact Form */}
//           <div className="bg-gray-900/30 border border-emerald-500/20 rounded-lg p-6">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="block text-emerald-400 font-mono text-sm mb-2">
//                   &gt; name
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({...formData, name: e.target.value})}
//                   className="w-full bg-black/50 border border-emerald-500/30 rounded px-4 py-3 text-white font-mono focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all"
//                   placeholder="John Doe"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-emerald-400 font-mono text-sm mb-2">
//                   &gt; email
//                 </label>
//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({...formData, email: e.target.value})}
//                   className="w-full bg-black/50 border border-emerald-500/30 rounded px-4 py-3 text-white font-mono focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all"
//                   placeholder="john@example.com"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-emerald-400 font-mono text-sm mb-2">
//                   &gt; message
//                 </label>
//                 <textarea
//                   value={formData.message}
//                   onChange={(e) => setFormData({...formData, message: e.target.value})}
//                   rows={4}
//                   className="w-full bg-black/50 border border-emerald-500/30 rounded px-4 py-3 text-white font-mono focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
//                   placeholder="Your message..."
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-4 bg-emerald-500/10 border border-emerald-500 text-emerald-400 font-mono rounded hover:bg-emerald-500 hover:text-black transition-all duration-300"
//               >
//                 Send Message →
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Footer
// const Footer = () => (
//   <footer className="py-8 px-4 border-t border-emerald-500/20">
//     <div className="max-w-6xl mx-auto text-center">
//       <p className="text-gray-500 font-mono text-sm">
//         <span className="text-emerald-600">&lt;</span>
//         Designed & Built by <span className="text-emerald-400">Samuel Ofoegbu</span>
//         <span className="text-emerald-600">/&gt;</span>
//       </p>
//       <p className="text-gray-600 font-mono text-xs mt-2">
//         © {new Date().getFullYear()} All rights reserved.
//       </p>
//     </div>
//   </footer>
// );

// // Main Portfolio Component
// export default function Portfolio() {
//   const [activeSection, setActiveSection] = useState('start');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['start', 'education', 'work', 'techstack', 'experience', 'contact'];
//       const scrollPosition = window.scrollY + window.innerHeight / 3;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white overflow-x-hidden">
//       {/* Custom CSS for animations */}
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes scan {
//           0% { top: -10%; }
//           100% { top: 110%; }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out forwards;
//         }
        
//         .animate-scan {
//           animation: scan 8s linear infinite;
//         }
        
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         /* Scrollbar Styling */
//         ::-webkit-scrollbar {
//           width: 8px;
//         }
        
//         ::-webkit-scrollbar-track {
//           background: #000;
//         }
        
//         ::-webkit-scrollbar-thumb {
//           background: #10b981;
//           border-radius: 4px;
//         }
        
//         ::-webkit-scrollbar-thumb:hover {
//           background: #34d399;
//         }

//         /* Selection Color */
//         ::selection {
//           background: #10b981;
//           color: #000;
//         }
//       `}</style>
      
//       <MatrixRain />
//       <Navbar activeSection={activeSection} />
//       <HeroSection />
//       <EducationSection />
//       <WorkSection />
//       <TechStackSection />
//       <ExperienceSection />
//       <ContactSection />
//       <Footer />
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useParams } from 'react-router-dom'; // Import Link and useParams
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Navbar from './components/Navbar';
// import SectionTitle from './components/SectionTitle';
// import ProjectCard from './components/ProjectCard';
// import TechStackCards from './components/TechStackCards';
// import ExperienceCard from './components/ExperienceCard';
// import ContactForm from './components/ContactForm';
// import Footer from './components/Footer';
// import AnimatedBoxes from './components/AnimatedBoxes';
// import GlowButton from './components/GlowButton';
// import adcomatImage from './assets/adcomat.png';
// import naijalistImage from './assets/naijalist.png';
// import anniekukuImage from './assets/anniekuku.png';
// import punpoetsImage from './assets/punpoets.png';
// import FinforecastImage from './assets/FinforecastImage.png';

// gsap.registerPlugin(ScrollTrigger);

// // ------------------------------------------------------------------
// // Project Detail Component
// // ------------------------------------------------------------------
// const ProjectDetail = () => {
//   const { id } = useParams();
//   // Find the project from the global projects array.
//   // In a real app, you might fetch from a store or API.
//   const project = projects.find(p => p.id === parseInt(id));

//   if (!project) {
//     return <div className="text-center py-20">Project not found</div>;
//   }

//   return (
//     <div className="container mx-auto py-12 px-4">
//       <h1 className="text-4xl font-bold mb-6">{project.name}</h1>

//       {/* Gallery: at least two images */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         {project.images.slice(0, 2).map((img, i) => (
//           <img
//             key={i}
//             src={img}
//             alt={`${project.name} screenshot ${i + 1}`}
//             className="rounded-lg shadow-md w-full object-cover"
//           />
//         ))}
//       </div>

//       {/* Description */}
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold mb-2">Description</h2>
//         <p className="text-gray-700 whitespace-pre-line">{project.description}</p>
//       </div>

//       {/* Features */}
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold mb-2">Features</h2>
//         <ul className="list-disc pl-5 space-y-1">
//           {project.features.map((feature, i) => (
//             <li key={i} className="text-gray-700">{feature}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Tech Stack */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
//         <div className="flex flex-wrap gap-2">
//           {project.tech.map((tech, i) => (
//             <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ------------------------------------------------------------------
// // Main Portfolio Component
// // ------------------------------------------------------------------
// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState('start');

//   // Refs for hero split & parallax
//   const heroTopHalfRef = useRef(null);
//   const heroBottomHalfRef = useRef(null);
//   const heroBadgeRef = useRef(null);
//   const heroNameRef = useRef(null);
//   const heroTaglineRef = useRef(null);
//   const heroButtonsRef = useRef(null);
//   const heroShapesRef = useRef([]);

//   // Refs for education & work animations
//   const liquidTriggerRef = useRef(null);
//   const textParagraphsRef = useRef([]);
//   const inkTriggersRef = useRef([]);

//   // Helper to collect paragraphs and ink triggers
//   const addToTextRefs = (el) => {
//     if (el && !textParagraphsRef.current.includes(el)) {
//       textParagraphsRef.current.push(el);
//     }
//   };
//   const addToInkRefs = (el) => {
//     if (el && !inkTriggersRef.current.includes(el)) {
//       inkTriggersRef.current.push(el);
//     }
//   };

//   // Projects data (updated with id, images array)
//   const projects = [
//     {
//       id: 1,
//       name: "ADCOMAT",
//       type: "Website",
//       description:
//         "ADCOMAT is a digital marketing automation platform built to help businesses streamline, manage, and optimize their advertising campaigns. It offers a centralized dashboard for campaign execution, performance tracking, and analytics, enabling data-driven decisions and scalable growth.",
//       tech: ["React", "TypeScript", "Tailwind CSS"],
//       link: "https://adcomat.vercel.app/",
//       features: [""],
//       images: [adcomatImage, adcomatImage], // Using same image twice; replace with actual second image
//     },
//     {
//       id: 2,
//       name: "NaijaList",
//       type: "Website",
//       description:
//         "NaijaList is a Nigeria-focused classifieds and marketplace platform that connects buyers and sellers nationwide. Users can post and discover listings including jobs, services, trade-by-barter deals, and product sales.\n\nThe platform integrates KYC verification and geo-location mapping to improve trust, allowing users to interact with verified individuals within specific regions. It creates a secure, transparent, and flexible peer-to-peer marketplace for everyday transactions.",
//       tech: ["React", "JavaScript", "Tailwind CSS", "PostgreSQL", "Docker"],
//       link: "https://naija-list.vercel.app/",
//       features: ["KYC Verification", "Geo-location Mapping", "Live Listings"],
//       images: [naijalistImage, naijalistImage],
//     },
//     {
//       id: 3,
//       name: "Anniekuku",
//       type: "Website",
//       description:
//         "Anniekuku is a modern e-commerce platform for discovering and purchasing handcrafted fine jewelry. It delivers a visually rich shopping experience with curated collections, advanced filtering, and optimized media handling for seamless browsing.",
//       tech: ["React", "JavaScript", "Tailwind CSS", "PostgreSQL", "Cloudinary"],
//       link: "https://anniekuku-frontend.vercel.app/",
//       features: ["Product Catalog", "Category Filtering", "Image Optimization"],
//       images: [anniekukuImage, anniekukuImage],
//     },
//     {
//       id: 4,
//       name: "Punpoets",
//       type: "Website",
//       description:
//         "Punpoets is a creative platform that connects poets, writers, and clients through content sharing and booking. Poets can showcase portfolios, publish blog posts, and receive bookings, while users can discover and hire talent for events and projects.",
//       tech: ["React", "Firebase", "Express", "Socket.io"],
//       link: "https://punpoets.vercel.app/",
//       features: ["Poet Profiles", "Booking System", "Real-time Interaction"],
//       images: [punpoetsImage, punpoetsImage],
//     },
//     {
//       id: 5,
//       name: "Multi-Model Financial Forecasting",
//       type: "Data Science",
//       description:
//         "An end-to-end financial forecasting system integrating GARCH(1,1), ARIMA-GARCH, and a custom LSTM-GNN hybrid with Graph Attention and Transformer encoders.\n\nThe system fetches live and historical stock data (Yahoo Finance), orchestrates model training using Celery, and stores probabilistic forecasts (mean, volatility, standard deviation) in PostgreSQL.\n\nThe hybrid deep learning model, built with TensorFlow and TensorFlow Probability, outputs full predictive distributions using negative log-likelihood loss and mixed-precision training. It achieved a 98% reduction in training loss, demonstrating strong capability in capturing multi-stock dependencies.\n\nA FastAPI backend serves predictions and metrics, while a React + Tailwind frontend provides interactive visualizations for model comparison. Fully containerized using Docker with Redis and Celery for distributed processing.",
//       tech: [
//         "Python",
//         "TensorFlow",
//         "TensorFlow Probability",
//         "Scikit-learn",
//         "FastAPI",
//         "Celery",
//         "Redis",
//         "PostgreSQL",
//         "React",
//         "Tailwind CSS",
//       ],
//       link: "https://github.com/Samm-OB/Forecast",
//       features: [
//         "Multi-model Forecasting",
//         "Probabilistic Predictions",
//         "Real-time Data Pipeline",
//         "Interactive Visualization Dashboard",
//       ],
//       images: [FinforecastImage, FinforecastImage],
//     },
//     {
//       id: 6,
//       name: "Fintech Template 1",
//       type: "Template",
//       description:
//         "A clean and modern fintech website template designed for startups and financial platforms. It features a responsive layout, intuitive navigation, and essential pages for showcasing financial products and services.",
//       tech: ["React", "Tailwind CSS", "HTML"],
//       link: "https://fintech1.vercel.app/",
//       features: ["Landing Page", "About Page", "Custom Error Page"],
//       images: [punpoetsImage, punpoetsImage],
//     },
//   ];

//   // Group projects by category (using reduce for compatibility)
//   const groupedProjects = projects.reduce((acc, project) => {
//     let category;
//     if (project.type === "Website") category = "websites";
//     else if (project.type === "Data Science") category = "Data Science Projects";
//     else if (project.type === "Template") category = "website templates";
//     else category = "other";
//     if (!acc[category]) acc[category] = [];
//     acc[category].push(project);
//     return acc;
//   }, {});

//   // Experience data (unchanged)
//   const experiences = [
//     {
//       role: "Freelance Developer",
//       company: "Self-Employed",
//       period: "2025 – Present",
//       description: "Building scalable web applications and ML-powered features for clients.",
//       achievements: [
//         "Built Anniekuku – E-commerce jewelry platform",
//         "Built Vaxpal – Vaccination tracking app",
//         "Built Punpoets – Poetry sharing platform",
//         "Built ADCOMAT – Marketing automation tool",
//         "Built Naijalist – Nigerian marketplace"
//       ]
//     },
//     {
//       role: "Data Scientist",
//       company: "Waya Links",
//       period: "2025",
//       description: "Developed data-driven solutions for fintech applications.",
//       achievements: [
//         "Delivered 15+ successful data projects",
//         "Implemented CI/CD pipelines",
//         "Increased test coverage to 85%"
//       ]
//     },
//     {
//       role: "Machine Learning Intern",
//       company: "Brainwave Matrix Solutions",
//       period: "2025",
//       description: "Developed ML models for business intelligence solutions.",
//       achievements: [
//         "Built prediction model with 92% accuracy",
//         "Automated reporting workflows",
//         "Reduced data processing time by 40%"
//       ]
//     },
//     {
//       role: "Data Analyst Intern",
//       company: "Great Place to Work",
//       period: "2024",
//       description: "Analyzed customer data and provided insights to improve customer success strategies.",
//       achievements: [
//         "Analyzed customer feedback data",
//         "Created automated reporting dashboards",
//         "Improved data processing efficiency"
//       ]
//     }
//   ];

//   // Active section detection (unchanged)
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['start', 'education', 'work', 'techstack', 'experience', 'contact'];
//       const scrollPosition = window.scrollY + window.innerHeight / 3;
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Hero animations (unchanged)
//   useEffect(() => {
//     if (heroTopHalfRef.current && heroBottomHalfRef.current) {
//       gsap.fromTo(heroTopHalfRef.current,
//         { y: '0%' },
//         {
//           y: '-50%',
//           scrollTrigger: {
//             trigger: document.getElementById('start'),
//             start: 'top top',
//             end: 'bottom top',
//             scrub: true,
//           }
//         }
//       );
//       gsap.fromTo(heroBottomHalfRef.current,
//         { y: '0%' },
//         {
//           y: '50%',
//           scrollTrigger: {
//             trigger: document.getElementById('start'),
//             start: 'top top',
//             end: 'bottom top',
//             scrub: true,
//           }
//         }
//       );
//     }

//     const tl = gsap.timeline();
//     tl.to(heroBadgeRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
//       .to(heroNameRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
//       .to(heroTaglineRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
//       .to(heroButtonsRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4');

//     heroShapesRef.current.forEach((shape, i) => {
//       if (shape) {
//         const speed = 0.3 + i * 0.15;
//         gsap.fromTo(shape,
//           { y: 0 },
//           {
//             y: -150 * speed,
//             scrollTrigger: {
//               trigger: document.getElementById('start'),
//               start: 'top bottom',
//               end: 'bottom top',
//               scrub: true,
//             }
//           }
//         );
//       }
//     });
//   }, []);

//   // Education & Work scroll animations (unchanged)
//   useEffect(() => {
//     if (liquidTriggerRef.current) {
//       gsap.fromTo(liquidTriggerRef.current,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1.5,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: liquidTriggerRef.current,
//             start: "top 80%",
//             toggleActions: "play none none none"
//           }
//         }
//       );
//     }

//     textParagraphsRef.current.forEach((p) => {
//       if (p) {
//         gsap.fromTo(p,
//           { opacity: 0, y: 20 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 1,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: p,
//               start: "top 85%",
//               toggleActions: "play none none none"
//             }
//           }
//         );
//       }
//     });

//     inkTriggersRef.current.forEach((el) => {
//       if (el) {
//         ScrollTrigger.create({
//           trigger: el,
//           start: "top 80%",
//           onEnter: () => el.classList.add('is-active'),
//         });
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="bg-white text-gray-900">
//       {/* SVG Filter for Liquid Effect */}
//       <svg style={{ position: 'absolute', width: 0, height: 0 }}>
//         <defs>
//           <filter id="liquify" x="-50%" y="-50%" width="200%" height="200%">
//             <feTurbulence baseFrequency="0.02" numOctaves="3" result="turbulence" />
//             <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="20" xChannelSelector="R" yChannelSelector="G" />
//           </filter>
//         </defs>
//       </svg>

//       <Navbar activeSection={activeSection} />

//       {/* Hero Section (unchanged) */}
//       <section id="start" className="relative bg-black text-white min-h-screen overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

//         <div className="absolute inset-0">
//           <div
//             ref={heroTopHalfRef}
//             className="absolute top-0 left-0 w-full h-1/2 overflow-hidden"
//             style={{ clipPath: 'inset(0 0 50% 0)' }}
//           >
//             <div className="h-full flex items-end justify-center pb-24 bg-transparent">
//               <span className="text-white/10 text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter select-none">
//                 SAMUEL
//               </span>
//             </div>
//           </div>
//           <div
//             ref={heroBottomHalfRef}
//             className="absolute top-1/2 left-0 w-full h-1/2 overflow-hidden"
//             style={{ clipPath: 'inset(50% 0 0 0)' }}
//           >
//             <div className="h-full flex items-start justify-center pt-24 bg-transparent">
//               <span className="text-white/10 text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter select-none">
//                 OFOEGBU
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
//           <div className="max-w-4xl mx-auto">
//             <div ref={heroBadgeRef} className="mb-8 opacity-0 translate-y-8">
//               <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-sm font-mono tracking-wide rounded-sm backdrop-blur-sm">
//                 Available for opportunities
//               </span>
//             </div>
//             <h1 ref={heroNameRef} className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-white mb-6 opacity-0 translate-y-8">
//               Samuel Ofoegbu
//             </h1>
//             <p ref={heroTaglineRef} className="text-xl text-white/70 max-w-2xl mx-auto mb-10 opacity-0 translate-y-8">
//               Software Developer & Data Scientist — I build things that matter.
//             </p>
//             <div ref={heroButtonsRef} className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 translate-y-8">
//               <button
//                 onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
//                 className="px-8 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
//               >
//                 View Work →
//               </button>
//               <button
//                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//                 className="px-8 py-3 border border-white/30 text-white text-sm font-medium hover:border-white/60 transition-colors"
//               >
//                 Get in Touch
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           <div
//             ref={(el) => { if (el) heroShapesRef.current[0] = el; }}
//             className="absolute left-[10%] top-[20%] w-32 h-32 bg-white/5 rounded-full blur-2xl"
//           />
//           <div
//             ref={(el) => { if (el) heroShapesRef.current[1] = el; }}
//             className="absolute right-[15%] top-[60%] w-48 h-48 bg-white/5 rounded-full blur-3xl"
//           />
//           <div
//             ref={(el) => { if (el) heroShapesRef.current[2] = el; }}
//             className="absolute left-[30%] bottom-[10%] w-24 h-24 bg-white/5 rounded-full blur-xl"
//           />
//           <div
//             ref={(el) => { if (el) heroShapesRef.current[3] = el; }}
//             className="absolute right-[5%] top-[40%] w-40 h-40 bg-white/5 rounded-full blur-2xl"
//           />
//         </div>
//       </section>

//       {/* Animated Boxes */}
//       <AnimatedBoxes />

//       {/* Education Section (unchanged) */}
//       <section id="education" className="py-24 px-4">
//         <div className="max-w-4xl mx-auto">
//           <div
//             ref={liquidTriggerRef}
//             className="c-author"
//             style={{ opacity: 0, transform: 'translateY(50px)', filter: 'url(#liquify)' }}
//           >
//             <div className="c-author__english text-3xl md:text-5xl font-light">Education</div>
//             <div className="c-author__korean text-4xl md:text-6xl font-light">학력</div>
//           </div>
//           <div className="space-y-12 mt-12">
//             <div
//               ref={addToInkRefs}
//               className="js-ink-trigger c-transition relative overflow-hidden rounded-lg shadow-md bg-white p-6"
//             >
//               <h3 className="text-xl font-medium text-gray-900">Master's in Financial Engineering (in view)</h3>
//               <p ref={addToTextRefs} className="text-gray-500 font-mono text-sm mt-1">World Quant University | 2025 – 2027</p>
//               <p ref={addToTextRefs} className="text-gray-600 mt-2">Specialized in Deep Learning for Finance</p>
//               <img
//                 className="c-transition__img w-full h-48 object-cover mt-4 rounded-md"
//                 src="https://via.placeholder.com/600x400?text=University+Image"
//                 alt="placeholder"
//               />
//             </div>
//             <div
//               ref={addToInkRefs}
//               className="js-ink-trigger c-transition relative overflow-hidden rounded-lg shadow-md bg-white p-6"
//             >
//               <h3 className="text-xl font-medium text-gray-900">Bachelor's in Mathematics</h3>
//               <p ref={addToTextRefs} className="text-gray-500 font-mono text-sm mt-1">University of Lagos (UNILAG) | 2022 – 2025</p>
//               <p ref={addToTextRefs} className="text-gray-600 mt-2">Focus on Full-Stack Development and Data Science</p>
//               <img
//                 className="c-transition__img w-full h-48 object-cover mt-4 rounded-md"
//                 src="https://via.placeholder.com/600x400?text=University+Image"
//                 alt="placeholder"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Work Section - Grouped by Category */}
//       <section id="work" className="py-24 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle subtitle="selected projects">Work</SectionTitle>

//           {Object.entries(groupedProjects).map(([category, projs]) => (
//             <div key={category} className="mb-12">
//               <h3 className="text-2xl font-semibold mb-6 capitalize">
//                 {category.replace("-", " ")}
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {projs.map((project) => (
//                   <div
//                     key={project.id}
//                     ref={addToInkRefs}
//                     className="js-ink-trigger c-transition relative overflow-hidden rounded-xl shadow-md bg-white"
//                   >
//                     <Link to={`/project/${project.id}`} className="block h-full">
//                       <ProjectCard project={project} index={project.id} />
//                     </Link>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Tech Stack Section */}
//       <section id="techstack" className="py-24 px-4">
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle subtitle="tools & technologies">Tech Stack</SectionTitle>
//           <TechStackCards />
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="py-24 px-4 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <SectionTitle subtitle="work history">Experience</SectionTitle>
//           <div>
//             {experiences.map((exp, idx) => (
//               <ExperienceCard key={idx} experience={exp} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-24 px-4">
//         <div className="max-w-4xl mx-auto">
//           <SectionTitle subtitle="let's connect">Contact</SectionTitle>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <p className="text-gray-600 mb-8">
//                 Have a project in mind or just want to chat? I'm always open to discussing new opportunities.
//               </p>
//               <div className="space-y-4">
//                 <a href="https://github.com/Samm-OB" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors">
//                   <span>⌘</span> GitHub
//                 </a>
//                 <a href="https://www.linkedin.com/in/samuel-ofoegbu-873116182/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors">
//                   <span>◉</span> LinkedIn
//                 </a>
//                 <a href="https://x.com/say_s1m" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors">
//                   <span>✦</span> Twitter
//                 </a>
//                 <a href="mailto:smlofoegbu@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors">
//                   <span>✉</span> Email
//                 </a>
//               </div>
//               <div className="mt-8">
//                 <a
//                   href="/SAMUEL_OFOEGBU_cv__2_.pdf"
//                   download
//                   className="inline-block px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium hover:border-gray-400 transition-colors"
//                 >
//                   Download CV ↓
//                 </a>
//               </div>
//             </div>
//             <div>
//               <ContactForm />
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Portfolio;
// export { ProjectDetail }; // Export the detail component for routing


import { Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import  ProjectDetail  from './components/ProjectDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;