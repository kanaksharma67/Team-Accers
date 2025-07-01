
import React from 'react';

const AchievementsTimeline: React.FC = () => {
  const achievements = [
    {
      year: "2024",
      event: "HackArena",
      project: "UnseenCare",
      award: "1st Prize Winner",
      description: "AI + IoT-driven smart health and hygiene monitoring system with predictive analytics",
      color: "from-purple-500 to-purple-600",
      icon: "🏆"
    },
    {
      year: "2024", 
      event: "HackHazards",
      project: "StellarPay",
      award: "1st Prize Winner",
      description: "Revolutionary offline-first blockchain payment system using Stellar network",
      color: "from-pink-500 to-pink-600",
      icon: "🥇"
    },
    {
      year: "2024",
      event: "Manipal Hackathon",
      project: "NeuroNest", 
      award: "1st Prize Winner",
      description: "AI-powered dementia care assistant with real-time behavior monitoring",
      color: "from-blue-500 to-blue-600",
      icon: "🎯"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-gradient mb-4">
            Achievement Timeline
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Our journey of consecutive victories in competitive hackathons
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500" />

          {/* Achievement items */}
          <div className="space-y-16">
            {achievements.map((achievement, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-background flex items-center justify-center animate-pulse-glow">
                  <span className="text-xs">{achievement.icon}</span>
                </div>

                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <div className="group bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 glow-hover">
                    {/* Year badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-4 py-2 bg-gradient-to-r ${achievement.color} text-white text-sm font-bold rounded-full`}>
                        {achievement.year}
                      </span>
                    </div>

                    {/* Event info */}
                    <h3 className="font-orbitron text-xl font-bold text-white mb-2">{achievement.event}</h3>
                    <h4 className="text-lg font-semibold text-purple-300 mb-2">{achievement.project}</h4>
                    
                    {/* Award */}
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-300 text-sm rounded-full border border-yellow-500/30">
                        <span className="mr-2">🏆</span>
                        {achievement.award}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-2xl transition-all duration-500 pointer-events-none" />
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <div className="text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-purple-300">Win Rate</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <div className="text-4xl font-bold text-gradient mb-2">3</div>
              <div className="text-purple-300">Consecutive Wins</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <div className="text-4xl font-bold text-gradient mb-2">24</div>
              <div className="text-purple-300">Hours Each Event</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsTimeline;
