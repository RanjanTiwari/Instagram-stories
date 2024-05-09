import React from 'react';

interface StoryAvatarProps {
  story: {
    id: string;
    image: string;
    title: string;
  };
  onSelect: (id: string) => void;
}

const StoryAvatar: React.FC<StoryAvatarProps> = ({ story, onSelect }) => {
  return (
    <div onClick={() => onSelect(story.id)} style={{ margin: '5px', cursor: 'pointer' }}>
      <img src={story.image} alt={story.title} style={{ borderRadius: '50%', width: '60px', height: '60px', objectFit: 'cover' }} />
    </div>
  );
};

export default StoryAvatar;
