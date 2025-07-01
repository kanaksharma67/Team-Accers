
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "NeuroNest",
      subtitle: "AI-Powered Dementia Care Assistant",
      event: "Manipal Hackathon - 1st Prize",
      description: "Revolutionary AI system providing personalized care and monitoring for dementia patients, featuring real-time behavior analysis and caregiver alerts.",
      techStack: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      features: ["Real-time monitoring", "AI behavior analysis", "Caregiver dashboard", "Emergency alerts"]
    },
    {
      title: "StellarPay",
      subtitle: "Offline-First Blockchain Transactions",
      event: "HackHazards - 1st Prize", 
      description: "Innovative blockchain-based payment system that works seamlessly offline, ensuring financial accessibility in remote areas.",
      techStack: ["Stellar SDK", "Node.js", "React Native", "SQLite", "Blockchain"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      features: ["Offline transactions", "Stellar blockchain", "Mobile-first design", "Sync when online"]
    },
    {
      title: "UnseenCare",
      subtitle: "AI + IoT Smart Health System",
      event: "HackArena - 1st Prize",
      description: "Comprehensive health and hygiene monitoring system combining AI analysis with IoT sensors for proactive healthcare.",
      techStack: ["IoT", "Python", "Flask", "React", "Arduino", "ML"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      github: "#", 
      demo: "#",
      features: ["IoT sensor network", "AI health analysis", "Predictive alerts", "Real-time dashboard"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-gradient mb-4">
            Our Winning Projects
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Three consecutive hackathon victories showcasing our expertise in AI, blockchain, and IoT
          </p>
        </div>

        {/* Project showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Project cards navigation */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                onClick={() => setActiveProject(index)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-500 ${
                  activeProject === index
                    ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-400/50 glow'
                    : 'bg-purple-900/20 border-purple-500/30 hover:border-purple-400/40'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-orbitron text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-purple-300 text-sm">{project.subtitle}</p>
                  </div>
                  <div className="flex space-x-2">
                    <a href={project.github} className="p-2 bg-purple-600/20 rounded-full hover:bg-purple-600/40 transition-colors">
                      <Github className="w-4 h-4 text-purple-300" />
                    </a>
                    <a href={project.demo} className="p-2 bg-purple-600/20 rounded-full hover:bg-purple-600/40 transition-colors">
                      <ExternalLink className="w-4 h-4 text-purple-300" />
                    </a>
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-300 text-xs rounded-full border border-yellow-500/30">
                    🏆 {project.event}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-purple-600/30 text-purple-200 text-xs rounded border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Active project display */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-purple-400/30 glow">
              <img 
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-orbitron text-2xl font-bold text-white mb-2">
                  {projects[activeProject].title}
                </h3>
                <p className="text-purple-200 mb-4">{projects[activeProject].description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {projects[activeProject].features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                      <span className="text-purple-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
