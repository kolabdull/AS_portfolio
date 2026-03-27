import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import SectionTitle from './components/SectionTitle';
import ProjectCard from './components/ProjectCard';
import TechStackCards from './components/TechStackCards';
import ExperienceCard from './components/ExperienceCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AnimatedBoxes from './components/AnimatedBoxes';
import GlowButton from './components/GlowButton';
import adcomatImage from './assets/adcomat.png';
import naijalistImage from './assets/naijalist.png';
import anniekukuImage from './assets/anniekuku.png';
import punpoetsImage from './assets/punpoets.png';
import FinforecastImage from './assets/FinforecastImage.png';
import fintech1image1 from './assets/fintech1image1.png'
import fintech1image2 from './assets/fintech1image2.png'
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);


// Projects data (updated with id, images array)
  const projects = [
    {
      id: 1,
      name: "ADCOMAT",
      type: "Website",
      description: "ADCOMAT is a digital marketing automation platform built to help businesses streamline, manage, and optimize their advertising campaigns. It offers a centralized dashboard for campaign execution, performance tracking, and analytics, enabling data-driven decisions and scalable growth.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://adcomat.vercel.app/",
      features: [""],
      images: [adcomatImage, adcomatImage], // Using same image twice; replace with actual second image
    },
    {
      id: 2,
      name: "NaijaList",
      type: "Website",
      description:
        "NaijaList is a Nigeria-focused classifieds and marketplace platform that connects buyers and sellers nationwide. Users can post and discover listings including jobs, services, trade-by-barter deals, and product sales.\n\nThe platform integrates KYC verification and geo-location mapping to improve trust, allowing users to interact with verified individuals within specific regions. It creates a secure, transparent, and flexible peer-to-peer marketplace for everyday transactions.",
      tech: ["React", "JavaScript", "Tailwind CSS", "PostgreSQL", "Docker"],
      link: "https://naija-list.vercel.app/",
      features: ["KYC Verification", "Geo-location Mapping", "Live Listings"],
      images: [naijalistImage, naijalistImage],
    },
    {
      id: 3,
      name: "Anniekuku",
      type: "Website",
      description: "Anniekuku is a modern e-commerce platform for discovering and purchasing handcrafted fine jewelry. It delivers a visually rich shopping experience with curated collections, advanced filtering, and optimized media handling for seamless browsing.",
      tech: ["React", "JavaScript", "Tailwind CSS", "PostgreSQL", "Cloudinary"],
      link: "https://anniekuku-frontend.vercel.app/",
      features: ["Product Catalog", "Category Filtering", "Image Optimization"],
      images: [anniekukuImage, anniekukuImage],
    },
    {
      id: 4,
      name: "Punpoets",
      type: "Website",
      description: "Punpoets is a creative platform that connects poets, writers, and clients through content sharing and booking. Poets can showcase portfolios, publish blog posts, and receive bookings, while users can discover and hire talent for events and projects.",
      tech: ["React", "Firebase", "Express", "Socket.io"],
      link: "https://punpoets.vercel.app/",
      features: ["Poet Profiles", "Booking System", "Real-time Interaction"],
      images: [punpoetsImage, punpoetsImage],
    },
    {
      id: 5,
      name: "Multi-Model Financial Forecasting",
      type: "Data Science",
      description:
        "An end-to-end financial forecasting system integrating GARCH(1,1), ARIMA-GARCH, and a custom LSTM-GNN hybrid with Graph Attention and Transformer encoders.\n\nThe system fetches live and historical stock data (Yahoo Finance), orchestrates model training using Celery, and stores probabilistic forecasts (mean, volatility, standard deviation) in PostgreSQL.\n\nThe hybrid deep learning model, built with TensorFlow and TensorFlow Probability, outputs full predictive distributions using negative log-likelihood loss and mixed-precision training. It achieved a 98% reduction in training loss, demonstrating strong capability in capturing multi-stock dependencies.\n\nA FastAPI backend serves predictions and metrics, while a React + Tailwind frontend provides interactive visualizations for model comparison. Fully containerized using Docker with Redis and Celery for distributed processing.",
      tech: [
        "Python",
        "TensorFlow",
        "TensorFlow Probability",
        "Scikit-learn",
        "FastAPI",
        "Celery",
        "Redis",
        "PostgreSQL",
        "React",
        "Tailwind CSS",
      ],
      link: "https://github.com/Samm-OB/Forecast",
      features: [
        "Multi-model Forecasting",
        "Probabilistic Predictions",
        "Real-time Data Pipeline",
        "Interactive Visualization Dashboard",
      ],
      images: [FinforecastImage, FinforecastImage],
    },
    {
      id: 6,
      name: "Fintech Template 1",
      type: "Template",
      description:
        "A clean and modern fintech website template designed for startups and financial platforms. It features a responsive layout, intuitive navigation, and essential pages for showcasing financial products and services.",
      tech: ["React", "Tailwind CSS", "HTML"],
      link: "https://fintech1.vercel.app/",
      features: ["Landing Page", "About Page", "Custom Error Page"],
      images: [fintech1image1, fintech1image2],
    },
  ];

// ------------------------------------------------------------------
// Project Detail Component
// ------------------------------------------------------------------
const ProjectDetail = () => {
  const { id } = useParams();
  // Find the project from the global projects array.
  // In a real app, you might fetch from a store or API.
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className="text-center py-20">Project not found</div>;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>

      {/* Gallery: at least two images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {project.images.slice(0, 2).map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${project.name} screenshot ${i + 1}`}
            className="rounded-lg shadow-md w-full object-cover"
          />
        ))}
      </div>
      {project.link && (
  <div className="mt-6">
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 bg-gray-500 text-white rounded hover:bg-gray-400 transition"
    >
      Live Demo →
    </a>
  </div>
)}

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700 whitespace-pre-line">{project.description}</p>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="list-disc pl-5 space-y-1">
          {project.features.map((feature, i) => (
            <li key={i} className="text-gray-700">{feature}</li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// ------------------------------------------------------------------
// Main Portfolio Component
// ------------------------------------------------------------------
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('start');

  // Refs for hero split & parallax
  const heroTopHalfRef = useRef(null);
  const heroBottomHalfRef = useRef(null);
  const heroBadgeRef = useRef(null);
  const heroNameRef = useRef(null);
  const heroTaglineRef = useRef(null);
  const heroButtonsRef = useRef(null);
  const heroShapesRef = useRef([]);

  // Refs for education & work animations
  const liquidTriggerRef = useRef(null);
  const textParagraphsRef = useRef([]);
  const inkTriggersRef = useRef([]);
  const navigate = useNavigate();   

  // Helper to collect paragraphs and ink triggers
  const addToTextRefs = (el) => {
    if (el && !textParagraphsRef.current.includes(el)) {
      textParagraphsRef.current.push(el);
    }
  };
  const addToInkRefs = (el) => {
    if (el && !inkTriggersRef.current.includes(el)) {
      inkTriggersRef.current.push(el);
    }
  };



  // Group projects by category (using reduce for compatibility)
  const groupedProjects = projects.reduce((acc, project) => {
    let category;
    if (project.type === "Website") category = "websites";
    else if (project.type === "Data Science") category = "Data Science Projects";
    else if (project.type === "Template") category = "website templates";
    else category = "other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(project);
    return acc;
  }, {});

  // Experience data (unchanged)
  const experiences = [
    {
      role: "Freelance Developer",
      company: "Self-Employed",
      period: "2025 – Present",
      description: "Building scalable web applications and ML-powered features for clients.",
      achievements: [
        "Built Anniekuku – E-commerce jewelry platform",
        "Built Vaxpal – Vaccination tracking app",
        "Built Punpoets – Poetry sharing platform",
        "Built ADCOMAT – Marketing automation tool",
        "Built Naijalist – Nigerian marketplace"
      ]
    },
    {
      role: "Data Scientist",
      company: "Waya Links",
      period: "2025",
      description: "Developed data-driven solutions for fintech applications.",
      achievements: [
        "Delivered 15+ successful data projects",
        "Implemented CI/CD pipelines",
        "Increased test coverage to 85%"
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Brainwave Matrix Solutions",
      period: "2025",
      description: "Developed ML models for business intelligence solutions.",
      achievements: [
        "Built prediction model with 92% accuracy",
        "Automated reporting workflows",
        "Reduced data processing time by 40%"
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Great Place to Work",
      period: "2024",
      description: "Analyzed customer data and provided insights to improve customer success strategies.",
      achievements: [
        "Analyzed customer feedback data",
        "Created automated reporting dashboards",
        "Improved data processing efficiency"
      ]
    }
  ];

  // Active section detection (unchanged)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['start', 'education', 'work', 'techstack', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero animations (unchanged)
  useEffect(() => {
    if (heroTopHalfRef.current && heroBottomHalfRef.current) {
      gsap.fromTo(heroTopHalfRef.current,
        { y: '0%' },
        {
          y: '-50%',
          scrollTrigger: {
            trigger: document.getElementById('start'),
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
      gsap.fromTo(heroBottomHalfRef.current,
        { y: '0%' },
        {
          y: '50%',
          scrollTrigger: {
            trigger: document.getElementById('start'),
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
    }

    const tl = gsap.timeline();
    tl.to(heroBadgeRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .to(heroNameRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .to(heroTaglineRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .to(heroButtonsRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4');

    heroShapesRef.current.forEach((shape, i) => {
      if (shape) {
        const speed = 0.3 + i * 0.15;
        gsap.fromTo(shape,
          { y: 0 },
          {
            y: -150 * speed,
            scrollTrigger: {
              trigger: document.getElementById('start'),
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            }
          }
        );
      }
    });
  }, []);

  // Education & Work scroll animations (unchanged)
  useEffect(() => {
    if (liquidTriggerRef.current) {
      gsap.fromTo(liquidTriggerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: liquidTriggerRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    textParagraphsRef.current.forEach((p) => {
      if (p) {
        gsap.fromTo(p,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: p,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });

    inkTriggersRef.current.forEach((el) => {
      if (el) {
        ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          onEnter: () => el.classList.add('is-active'),
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* SVG Filter for Liquid Effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="liquify" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.02" numOctaves="3" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="20" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <Navbar activeSection={activeSection} />

      {/* Hero Section (unchanged) */}
      <section id="start" className="relative bg-black text-white min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

        <div className="absolute inset-0">
          <div
            ref={heroTopHalfRef}
            className="absolute top-0 left-0 w-full h-1/2 overflow-hidden"
            style={{ clipPath: 'inset(0 0 50% 0)' }}
          >
            <div className="h-full flex items-end justify-center pb-24 bg-transparent">
              <span className="text-white/10 text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter select-none">
                SAMUEL
              </span>
            </div>
          </div>
          <div
            ref={heroBottomHalfRef}
            className="absolute top-1/2 left-0 w-full h-1/2 overflow-hidden"
            style={{ clipPath: 'inset(50% 0 0 0)' }}
          >
            <div className="h-full flex items-start justify-center pt-24 bg-transparent">
              <span className="text-white/10 text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter select-none">
                OFOEGBU
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div ref={heroBadgeRef} className="mb-8 opacity-0 translate-y-8">
              <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-sm font-mono tracking-wide rounded-sm backdrop-blur-sm">
                Available for opportunities
              </span>
            </div>
            <h1 ref={heroNameRef} className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-white mb-6 opacity-0 translate-y-8">
              Samuel Ofoegbu
            </h1>
            <p ref={heroTaglineRef} className="text-xl text-white/70 max-w-2xl mx-auto mb-10 opacity-0 translate-y-8">
              Software Developer & Data Scientist — I build things that matter.
            </p>
            <div ref={heroButtonsRef} className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 translate-y-8">
              <button
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                View Work →
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-white/30 text-white text-sm font-medium hover:border-white/60 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            ref={(el) => { if (el) heroShapesRef.current[0] = el; }}
            className="absolute left-[10%] top-[20%] w-32 h-32 bg-white/5 rounded-full blur-2xl"
          />
          <div
            ref={(el) => { if (el) heroShapesRef.current[1] = el; }}
            className="absolute right-[15%] top-[60%] w-48 h-48 bg-white/5 rounded-full blur-3xl"
          />
          <div
            ref={(el) => { if (el) heroShapesRef.current[2] = el; }}
            className="absolute left-[30%] bottom-[10%] w-24 h-24 bg-white/5 rounded-full blur-xl"
          />
          <div
            ref={(el) => { if (el) heroShapesRef.current[3] = el; }}
            className="absolute right-[5%] top-[40%] w-40 h-40 bg-white/5 rounded-full blur-2xl"
          />
        </div>
      </section>

      {/* Animated Boxes */}
      <AnimatedBoxes />

      {/* Education Section (unchanged) */}
      <section id="education" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            ref={liquidTriggerRef}
            className="c-author"
            style={{ opacity: 0, transform: 'translateY(50px)', filter: 'url(#liquify)' }}
          >
            <div className="c-author__english text-3xl md:text-5xl font-light">Education</div>
            <div className="c-author__korean text-4xl md:text-6xl font-light">학력</div>
          </div>
          <div className="space-y-12 mt-12">
            <div
              ref={addToInkRefs}
              className="js-ink-trigger c-transition relative overflow-hidden rounded-lg shadow-md bg-white p-6"
            >
              <h3 className="text-xl font-medium text-gray-900">Master's in Financial Engineering (in view)</h3>
              <p ref={addToTextRefs} className="text-gray-500 font-mono text-sm mt-1">World Quant University | 2025 – 2027</p>
              <p ref={addToTextRefs} className="text-gray-600 mt-2">Specialized in Deep Learning for Finance</p>
              <img
                className="c-transition__img w-full h-48 object-cover mt-4 rounded-md"
                src="https://via.placeholder.com/600x400?text=University+Image"
                alt="placeholder"
              />
            </div>
            <div
              ref={addToInkRefs}
              className="js-ink-trigger c-transition relative overflow-hidden rounded-lg shadow-md bg-white p-6"
            >
              <h3 className="text-xl font-medium text-gray-900">Bachelor's in Mathematics</h3>
              <p ref={addToTextRefs} className="text-gray-500 font-mono text-sm mt-1">University of Lagos (UNILAG) | 2022 – 2025</p>
              <p ref={addToTextRefs} className="text-gray-600 mt-2">Focus on Full-Stack Development and Data Science</p>
              <img
                className="c-transition__img w-full h-48 object-cover mt-4 rounded-md"
                src="https://via.placeholder.com/600x400?text=University+Image"
                alt="placeholder"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="selected projects">Work</SectionTitle>

          {Object.entries(groupedProjects).map(([category, projs]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 capitalize">
                {category.replace("-", " ")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projs.map((project) => (
                  <div
                    key={project.id}
                    ref={addToInkRefs}
                    className="js-ink-trigger c-transition relative overflow-hidden rounded-xl shadow-md bg-white cursor-pointer"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    <ProjectCard project={project} index={project.id} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="tools & technologies">Tech Stack</SectionTitle>
          <TechStackCards />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="work history">Experience</SectionTitle>
          <div>
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="let's connect">Contact</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-8">
                Have a project in mind or just want to chat? I'm always open to discussing new opportunities.
              </p>
              <div className="space-y-4">
                <a href="https://github.com/Samm-OB" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors">
                  <span>⌘</span> GitHub
                </a>
                <a href="https://www.linkedin.com/in/samuel-ofoegbu-873116182/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors">
                  <span>◉</span> LinkedIn
                </a>
                <a href="https://x.com/say_s1m" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors">
                  <span>✦</span> Twitter
                </a>
                <a href="mailto:smlofoegbu@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors">
                  <span>✉</span> Email
                </a>
              </div>
              <div className="mt-8">
                <a
                  href="/SAMUEL_OFOEGBU_cv__2_.pdf"
                  download
                  className="inline-block px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium hover:border-gray-400 transition-colors"
                >
                  Download CV ↓
                </a>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
export { ProjectDetail }; // Export the detail component for routing