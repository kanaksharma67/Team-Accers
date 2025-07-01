
import React from 'react';

const TechStackSection: React.FC = () => {
  const techCategories = [
    {
      category: "Frontend",
      color: "from-blue-500 to-blue-600",
      technologies: [
        { name: "React", description: "Modern UI development" },
        { name: "TypeScript", description: "Type-safe JavaScript" },
        { name: "Tailwind CSS", description: "Utility-first styling" },
        { name: "Three.js", description: "3D graphics and animations" }
      ]
    },
    {
      category: "Backend",
      color: "from-green-500 to-green-600", 
      technologies: [
        { name: "Node.js", description: "Server-side JavaScript" },
        { name: "Python", description: "AI/ML development" },
        { name: "Flask", description: "Lightweight web framework" },
        { name: "MongoDB", description: "NoSQL database" }
      ]
    },
    {
      category: "AI/ML",
      color: "from-purple-500 to-purple-600",
      technologies: [
        { name: "TensorFlow", description: "Machine learning models" },
        { name: "PyTorch", description: "Deep learning framework" },
        { name: "OpenCV", description: "Computer vision" },
        { name: "scikit-learn", description: "Data analysis" }
      ]
    },
    {
      category: "Blockchain",
      color: "from-yellow-500 to-yellow-600",
      technologies: [
        { name: "Stellar SDK", description: "Blockchain payments" },
        { name: "Smart Contracts", description: "Automated agreements" },
        { name: "Web3.js", description: "Blockchain integration" },
        { name: "Solidity", description: "Contract development" }
      ]
    },
    {
      category: "IoT/Hardware", 
      color: "from-red-500 to-red-600",
      technologies: [
        { name: "Arduino", description: "Microcontroller programming" },
        { name: "Raspberry Pi", description: "Single-board computing" },
        { name: "Sensors", description: "Environmental monitoring" },
        { name: "MQTT", description: "IoT communication" }
      ]
    },
    {
      category: "Tools & DevOps",
      color: "from-gray-500 to-gray-600",
      technologies: [
        { name: "Git", description: "Version control" },
        { name: "Docker", description: "Containerization" },
        { name: "AWS", description: "Cloud infrastructure" },
        { name: "CI/CD", description: "Automated deployment" }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-gradient mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            The cutting-edge technologies and tools that power our innovative solutions
          </p>
        </div>

        {/* Tech categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="group bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 glow-hover"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category header */}
              <div className="mb-6">
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${category.color} text-white text-sm font-bold rounded-full mb-3`}>
                  {category.category}
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 rounded-full" />
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={tech.name}
                    className="group/tech flex items-center justify-between p-3 bg-purple-800/20 rounded-lg border border-purple-500/20 hover:border-purple-400/40 hover:bg-purple-700/20 transition-all duration-300"
                  >
                    <div>
                      <h4 className="font-semibold text-white group-hover/tech:text-purple-200 transition-colors">
                        {tech.name}
                      </h4>
                      <p className="text-purple-400 text-xs">{tech.description}</p>
                    </div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full group-hover/tech:bg-pink-400 transition-colors" />
                  </div>
                ))}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 rounded-2xl transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Tech philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30">
            <h3 className="font-orbitron text-2xl font-bold text-gradient mb-4">
              Our Tech Philosophy
            </h3>
            <p className="text-purple-300 text-lg leading-relaxed max-w-3xl mx-auto">
              We believe in choosing the right tool for the job. Our diverse tech stack allows us to 
              tackle complex challenges across multiple domains - from AI and blockchain to IoT and 
              web development. We stay current with emerging technologies while maintaining focus on 
              proven, reliable solutions that deliver real value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
