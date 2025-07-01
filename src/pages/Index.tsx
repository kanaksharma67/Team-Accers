
import React, { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import ParticleBackground from '@/components/ParticleBackground';
import ScrollIndicator from '@/components/ScrollIndicator';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TeamSection from '@/components/TeamSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsTimeline from '@/components/AchievementsTimeline';
import MissionSection from '@/components/MissionSection';
import TechStackSection from '@/components/TechStackSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white relative">
      {/* Background elements */}
      <ParticleBackground />
      <ScrollIndicator />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <TeamSection />
        <ProjectsSection />
        <AchievementsTimeline />
        <MissionSection />
        <TechStackSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-purple-500/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="font-orbitron text-sm font-bold text-white">A</span>
            </div>
            <span className="font-orbitron text-lg font-bold text-gradient">ACCERS</span>
          </div>
          <p className="text-purple-300 text-sm">
            © 2024 Team Accers. Powering Tomorrow with Innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
