import React from 'react';
import './App.css'; // Make sure you have some basic styling defined in App.css
import StoryList from './components/StoryList';

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <StoryList />
      </main>
    </div>
  );
};

export default App;
