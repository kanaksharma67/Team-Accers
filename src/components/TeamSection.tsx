
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Rohit Sharma",
      role: "Full Stack Developer & AI Specialist",
      skills: ["React", "Node.js", "TensorFlow", "Python"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      github: "#",
      linkedin: "#",
      description: "Leading AI innovations with expertise in machine learning and full-stack development."
    },
    {
      name: "Kanak Sharma", 
      role: "Blockchain Developer & Backend Architect",
      skills: ["Stellar SDK", "Smart Contracts", "Node.js", "Database Design"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      github: "#",
      linkedin: "#",
      description: "Architecting secure blockchain solutions and scalable backend systems."
    },
    {
      name: "Chirag Pandit",
      role: "IoT Engineer & Hardware Specialist", 
      skills: ["IoT", "Arduino", "Raspberry Pi", "Sensor Integration"],
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      github: "#",
      linkedin: "#",
      description: "Building smart IoT solutions that bridge the physical and digital worlds."
    },
    {
      name: "Swartajit Dey",
      role: "Frontend Developer & UX Designer",
      skills: ["React", "UI/UX", "Animation", "Design Systems"],
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face", 
      github: "#",
      linkedin: "#",
      description: "Crafting beautiful user experiences with modern frontend technologies."
    }
  ];

  return (
    <section id="team" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-gradient mb-4">
            Meet the Team
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Four passionate innovators united by a shared vision to create technology that makes a difference
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="group relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 glow-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Profile image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-purple-500/50 group-hover:border-purple-400 transition-colors">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
              </div>

              {/* Member info */}
              <div className="text-center mb-4">
                <h3 className="font-orbitron text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-300 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-purple-600/30 text-purple-200 text-xs rounded-full border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="flex justify-center space-x-4">
                <a 
                  href={member.github}
                  className="p-2 bg-purple-600/20 rounded-full hover:bg-purple-600/40 transition-colors group/social"
                >
                  <Github className="w-5 h-5 text-purple-300 group-hover/social:text-white" />
                </a>
                <a 
                  href={member.linkedin}
                  className="p-2 bg-purple-600/20 rounded-full hover:bg-purple-600/40 transition-colors group/social"
                >
                  <Linkedin className="w-5 h-5 text-purple-300 group-hover/social:text-white" />
                </a>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-2xl transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Team photo section */}
        <div className="mt-20 text-center">
          <h3 className="font-orbitron text-2xl font-bold text-gradient mb-8">Our Journey Together</h3>
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border-4 border-purple-500/30 glow">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop" 
              alt="Team Accers"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-medium text-lg">Team Accers - Building the Future Together</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
