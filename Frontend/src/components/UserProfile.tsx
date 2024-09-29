import React, { useState } from 'react';

const UserProfile = () => {

    const profileData = {
        name: "Abdul Wasay",
        profilePicture: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg",
        bio : "Random Bio",
        followers: 10,
        following: 20
    } 
    // Random initial data for now
  const [followers, setFollowers] = useState(profileData.followers);
  const [following, setFollowing] = useState(profileData.following);
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {

    if (isFollowing) {
      setFollowers(followers - 1);
    } else {
      setFollowers(followers + 1);
    }
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {/* User info */}
      <div className="flex items-center space-x-4">
        <img className="w-16 h-16 rounded-full" src={profileData.profilePicture} alt='Profile Picture'/>
        <div>
          <h2 className="text-xl font-bold">{profileData.name}</h2> {/* Random username */}
          <p className="text-gray-600">{profileData.bio}</p> {/* Random bio */}
        </div>
      </div>


      

      {/* Followers and Following counts */}
      
      <div className="flex justify-between items-center mt-4 ">
              {/* Follow button */}
      <button
            onClick={toggleFollow}
            className={`px-4 py-2 rounded-md text-white ${
            isFollowing ? 'bg-red-500' : 'bg-blue-500'
            }`}
        >
            {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
      
        <div>
          <span className="font-bold">{followers}</span> Followers
        </div>
        <div>
          <span className="font-bold">{following}</span> Following
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
