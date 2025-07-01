
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-500/30 rotate-45 animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-pink-500/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-purple-500/20 rotate-12 animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-blue-500/30 animate-float" style={{ animationDelay: '6s' }} />
      </div>

      <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Team logo placeholder */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center glow animate-pulse-glow">
            <span className="font-orbitron text-2xl font-bold text-white">A</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="font-orbitron text-6xl md:text-8xl font-black mb-6">
          <span className="text-gradient">ACCERS</span>
        </h1>
        
        {/* Animated tagline */}
        <div className="mb-8 overflow-hidden">
          <p className="text-xl md:text-2xl text-purple-300 font-medium animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
            Powering Tomorrow with Innovation
          </p>
        </div>

        {/* Achievement counter */}
        <div className="mb-12 animate-fade-in-scale" style={{ animationDelay: '1s' }}>
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-full px-8 py-4 border border-purple-500/30">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">3</div>
              <div className="text-sm text-purple-300">Hackathons</div>
            </div>
            <div className="w-px h-8 bg-purple-500/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">3</div>
              <div className="text-sm text-purple-300">Wins</div>
            </div>
            <div className="w-px h-8 bg-purple-500/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">1</div>
              <div className="text-sm text-purple-300">Vision</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="animate-fade-in-scale" style={{ animationDelay: '1.5s' }}>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We are a team of 4 passionate innovators building technology that solves real-world problems 
            and transforms communities through groundbreaking AI, blockchain, and IoT solutions.
          </p>
          
          <button 
            onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 glow-hover"
          >
            Discover Our Journey
            <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
