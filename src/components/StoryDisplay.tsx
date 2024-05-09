import React, { useEffect, useState } from 'react';
import stories from '../data/stories.json';

interface StoryDisplayProps {
  storyId: string;
  onBack: () => void;
}

const StoryDisplay: React.FC<StoryDisplayProps> = ({ storyId, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(stories.findIndex(story => story.id === storyId));

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % stories.length;
      if (nextIndex === 0) { 
        onBack();
      } else {
        setCurrentIndex(nextIndex);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, onBack]);

  if (currentIndex === -1 || !stories[currentIndex]) {
    return <div>No story found</div>;
  }

  const currentStory = stories[currentIndex];

  return (
    <div className="story-container">
      <img src={currentStory.image} alt={currentStory.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div onClick={onBack} className="story-nav">
        <img src="/cross.svg" alt="Close" style={{ width: '20px', height: '20px' }} />
      </div>
    </div>
  );
};

export default StoryDisplay;
