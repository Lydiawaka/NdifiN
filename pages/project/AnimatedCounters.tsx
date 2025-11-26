import { useState, useEffect, FC } from 'react';

interface CountState {
  totalProjects: number;
  teamProjects: number;
  aiProjects: number;
  frameworks: number;
}

const AnimatedCounters: FC = () => {
  const [counts, setCounts] = useState<CountState>({
    totalProjects: 0,
    teamProjects: 0,
    aiProjects: 0,
    frameworks: 0
  });
  
  const targetCounts: CountState = {
    totalProjects: 15,
    teamProjects: 4,
    aiProjects: 2,
    frameworks: 7
  };
  
  const duration = 2000; 
  const frameDuration = 1000 / 60; 
  const totalFrames = Math.round(duration / frameDuration);
  
  useEffect(() => {
    let frame = 0;
    let animationFrameId: number;
    
    // Using requestAnimationFrame instead of setInterval for better performance
    const animate = (): void => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      
      setCounts({
        totalProjects: Math.floor(progress * targetCounts.totalProjects),
        teamProjects: Math.floor(progress * targetCounts.teamProjects),
        aiProjects: Math.floor(progress * targetCounts.aiProjects),
        frameworks: Math.floor(progress * targetCounts.frameworks)
      });
      
      if (frame < totalFrames) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Ensure we end exactly at the target
        setCounts(targetCounts);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    // Cleanup function
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto">
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-5xl font-bold">{counts.totalProjects}</span>
        <span className="text-gray-400 mt-2">Total Projects</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-5xl font-bold">{counts.teamProjects}</span>
        <span className="text-gray-400 mt-2">Team Projects</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-5xl font-bold">{counts.aiProjects}</span>
        <span className="text-gray-400 mt-2">Ai Projects</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-5xl font-bold">{counts.frameworks}</span>
        <span className="text-gray-400 mt-2">Frameworks</span>
      </div>
    </div>
  );
};

export default AnimatedCounters;