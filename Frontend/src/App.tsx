import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import Post from './components/Post';
// import LikeButton from './components/LikeButton';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto">
        <UserProfile/>

        <Post/>

        {/* <Comment author="JaneDoe" text="Great post!" /> */}
        {/* <LikeButton likes={10} /> */}
      
      </div>
    </div>
  );
};

export default App;
