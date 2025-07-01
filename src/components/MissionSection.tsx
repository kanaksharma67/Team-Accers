
import React from 'react';

const MissionSection: React.FC = () => {
  const values = [
    {
      title: "Innovation",
      description: "Pushing the boundaries of technology to create solutions that don't exist yet",
      icon: "💡"
    },
    {
      title: "Impact",
      description: "Building technology that solves real-world problems and improves lives",
      icon: "🌍"
    },
    {
      title: "Excellence",
      description: "Delivering high-quality solutions with attention to detail and user experience",
      icon: "⚡"
    },
    {
      title: "Collaboration",
      description: "Working together as a unified team to achieve extraordinary results",
      icon: "🤝"
    }
  ];

  return (
    <section id="mission" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />
        </div>

        {/* Section header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-gradient mb-6">
            Our Mission
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
              "To build technology that solves real-world problems and uplifts communities"
            </p>
            <p className="text-lg text-purple-300 leading-relaxed">
              We believe that the most impactful technology emerges from the intersection of innovation, 
              empathy, and technical excellence. Our mission drives us to create solutions that not only 
              showcase cutting-edge capabilities but also address genuine human needs and societal challenges.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative z-10">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="group bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 glow-hover text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="font-orbitron text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-purple-300 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Vision statement */}
        <div className="relative z-10">
          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-500/30 text-center">
            <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-gradient mb-6">
              What Drives Us Forward
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Technology for Good</h4>
                <p className="text-purple-300 text-sm leading-relaxed">
                  Every line of code we write, every algorithm we design, and every system we build 
                  is guided by the question: "How can this make the world a better place?"
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Continuous Innovation</h4>
                <p className="text-purple-300 text-sm leading-relaxed">
                  We stay at the forefront of emerging technologies, constantly learning and adapting 
                  to ensure our solutions leverage the best tools available.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Community Impact</h4>
                <p className="text-purple-300 text-sm leading-relaxed">
                  Our projects focus on addressing real challenges in healthcare, finance, and daily life, 
                  creating solutions that benefit entire communities.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Collaborative Excellence</h4>
                <p className="text-purple-300 text-sm leading-relaxed">
                  We believe that the best innovations come from diverse perspectives working together 
                  towards a common goal of positive change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
