import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import adcomatImage from '../assets/adcomat.png';
import naijalistImage from '../assets/naijalist.png';
import anniekukuImage from '../assets/anniekuku.png';
import punpoetsImage from '../assets/punpoets.png';
import FinforecastImage from '../assets/FinforecastImage.png';
import fintech1image1 from '../assets/fintech1image1.png';
import fintech1image2 from '../assets/fintech1image2.png';
import { useNavigate } from 'react-router-dom';


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
      images: [fintech1image2, fintech1image1],
    },
  ];

// ------------------------------------------------------------------
// Project Detail Component
// ------------------------------------------------------------------
// const ProjectDetail = () => {
//   const { id } = useParams();
//   // Find the project from the global projects array.
//   // In a real app, you might fetch from a store or API.
//   const project = projects.find(p => p.id === parseInt(id));

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  // Log to confirm data
  console.log('Rendering project:', project);

  if (!project) {
    return <div className="text-center py-20">Project not found</div>;
  }

  // Safely build images array (works even if images is missing)
  let imagesArray = [];
  if (Array.isArray(project.images) && project.images.length) {
    imagesArray = project.images.slice(0, 2);
  } else if (project.image) {
    imagesArray = [project.image];
  } else {
    imagesArray = ['/fallback-placeholder.jpg']; // add a placeholder image to your public folder
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {imagesArray.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${project.name} screenshot ${i + 1}`}
            className="rounded-lg shadow-md w-full object-cover"
            onError={(e) => { e.target.src = '/placeholder.png'; }}
          />
        ))}
      </div>

      {/* Live Demo Link */}
      {project.link && (
        <div className="mt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-emerald-500 text-white rounded hover:bg-emerald-400 transition"
          >
            Link →
          </a>
        </div>
      )}

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700 whitespace-pre-line p-2 visible-paragraph">
  {project.description || "No description available."}
</p>

      </div>

      {/* Features */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        {project.features && project.features.length > 0 ? (
          <ul className="list-disc pl-5 space-y-1">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No features listed.</p>
        )}
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {(project.tech || project.techStack || []).map((tech, i) => (
            <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;