import { useState } from 'react';

interface PostData {
  author: string;
  content: string;
  image?: string;
  likes: number;
  commentsNumber: number;
  comment: string;
  profilePicture?: string;
}

const Post = () => {
  const initialPostData: PostData[] = [
    {
      author: "JohnDoe",
      content: "This is my first post!",
      image: "https://via.placeholder.com/600",
      likes: 10,
      commentsNumber: 2,
      comment: "Great post!",
      profilePicture:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg",
    },
    {
      author: "JaneDoe",
      content: "Loving this community!",
      image: "https://via.placeholder.com/600",
      likes: 20,
      commentsNumber: 4,
      comment: "Thank you for sharing!",
      profilePicture:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg",
    },
  ];

  // State to toggle the comment input visibility
  const [showCommentInput, setShowCommentInput] = useState<number | null>(null);
  const [newComment, setNewComment] = useState('');
  const [posts, setPosts] = useState(initialPostData.map(post => ({ ...post, liked: false })));

  const toggleLike = (index: number) => {
    const updatedPosts = [...posts];
    const currentPost = updatedPosts[index];
    currentPost.liked = !currentPost.liked;
    currentPost.likes += currentPost.liked ? +1 : -1;
    setPosts(updatedPosts);
  };

  const handleCommentClick = (index: number) => {
    setShowCommentInput(showCommentInput === index ? null : index);
  };

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="bg-white text-black shadow-md rounded-lg p-4 mb-4 m-4 max-w-md mx-auto">
          {/* Author and Profile Picture */}
          <div className="flex items-center space-x-4 mb-4">
            {post.profilePicture && (
              <img
                src={post.profilePicture}
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />
            )}
            <h3 className="font-bold text-lg">{post.author}</h3>
          </div>

          {/* Post Content */}
          <p className="my-2 text-black">{post.content}</p>

          {/* Optional Image */}
          {post.image && (
            <img
              src={post.image}
              alt="post"
              className="w-full h-64 object-cover rounded-md mt-2"
            />
          )}

          {/* Like and Comment Buttons */}
          <div className="flex justify-between mt-4 text-gray-400">
            <div className="flex space-x-2">
              <button onClick={() => toggleLike(index)} className="text-blue-500 hover:text-blue-600">
                {post.liked ? 'Unlike' : 'Like'}
              </button>
              <span>{post.likes} Likes</span>
            </div>
            <div className="flex space-x-2">
              <button
                className="text-gray-500 hover:text-gray-600"
                onClick={() => handleCommentClick(index)}
              >
                Comment
              </button>
              <span>{post.commentsNumber} Comments</span>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-gray-200 rounded-lg border-gray-700 p-2 mt-4 flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-sm text-black">{post.author}</h4>
              <p className="text-black text-xs">{post.comment}</p>
            </div>
            <button className="text-blue-500 hover:text-blue-600">Like</button>
          </div>

          {/* Conditionally render the comment input */}
          {showCommentInput === index && (
            <div className="mt-4">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full p-2 border border-gray-700 rounded-lg bg-gray-200 text-black"
                placeholder="Write a comment..."
              />
              <button
                className="mt-2 text-blue-500 hover:text-blue-600"
                onClick={() => {
                  if (newComment.trim()) {
                    console.log('New comment:', newComment);
                    setNewComment('');
                  }
                }}
              >
                Post Comment
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Post;
