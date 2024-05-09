import React, { useState } from 'react';
import stories from '../data/stories.json'; // Ensure this import is correct
import StoryAvatar from './StoryAvatar';
import StoryDisplay from './StoryDisplay';

const StoryList: React.FC = () => {
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);

  const handleSelectStory = (id: string) => {
    setSelectedStoryId(id);
  };

  return (
    <div>
      {selectedStoryId ? (
        <StoryDisplay storyId={selectedStoryId} onBack={() => setSelectedStoryId(null)} />
      ) : (
        <div style={{ display: 'flex', padding: '10px 0' }}>
          {stories.map(story => (
            <StoryAvatar key={story.id} story={story} onSelect={handleSelectStory} />
          ))}
        </div>
      )}
    </div>
  );
};

export default StoryList;
