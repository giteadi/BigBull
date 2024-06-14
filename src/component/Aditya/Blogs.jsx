import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Blogs = () => {
  const initialPosts = [
    {
      id: 1,
      title: 'First Post',
      date: '2024-06-06',
      time: '10:00 AM',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione necessitatibus doloribus, voluptatum ipsa nam cum fuga error deleniti odit blanditiis, perferendis nemo quo alias eum, minima sint optio culpa?',
      image: 'https://www.c-sharpcorner.com/article/create-image-gallery-using-angular-7/Images/Create%20Image%20Gallery%20Using%20Angular.png',
      liked: false,
    },
    {
      id: 2,
      title: 'Second Post',
      date: '2024-06-07',
      time: '11:00 AM',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione necessitatibus doloribus, voluptatum ipsa nam cum fuga error deleniti odit blanditiis, perferendis nemo quo alias eum, minima sint optio culpa?',
      image: 'https://www.c-sharpcorner.com/article/create-image-gallery-using-angular-7/Images/Create%20Image%20Gallery%20Using%20Angular.png',
      liked: false,
    },
    {
      id: 3,
      title: 'Third Post',
      date: '2024-06-08',
      time: '12:00 PM',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione necessitatibus doloribus, voluptatum ipsa nam cum fuga error deleniti odit blanditiis, perferendis nemo quo alias eum, minima sint optio culpa?',
      image: 'https://www.c-sharpcorner.com/article/create-image-gallery-using-angular-7/Images/Create%20Image%20Gallery%20Using%20Angular.png',
      liked: false,
    },
    {
      id: 4,
      title: 'Fourth Post',
      date: '2024-06-09',
      time: '01:00 PM',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione necessitatibus doloribus, voluptatum ipsa nam cum fuga error deleniti odit blanditiis, perferendis nemo quo alias eum, minima sint optio culpa?',
      image: 'https://www.c-sharpcorner.com/article/create-image-gallery-using-angular-7/Images/Create%20Image%20Gallery%20Using%20Angular.png',
      liked: false,
    },
  ];

  const [posts, setPosts] = useState(initialPosts);
  const navigate = useNavigate();

  const handleLikeClick = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, liked: !post.liked } : post
      )
    );
  };

  const handlePost = (id) => {
    navigate(`/singlepost/${id}`);
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="bg-red-600 text-white flex items-center justify-center text-4xl py-4">
        Blogs
      </h1>
      <div className="posts mt-8 space-y-8">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className={`post cursor-pointer flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center`}
            onClick={() => handlePost(post.id)} // Pass post id to handlePost
          >
            <div className="w-full md:w-1/2 p-4 relative">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-sm text-gray-600">
                    {post.date} at {post.time}
                  </p>
                </div>
                <div
                  className="absolute bottom-10 right-10 cursor-pointer"
                  onClick={() => handleLikeClick(post.id)}
                >
                  <FaHeart
                    className={`text-2xl ${
                      post.liked ? 'text-red-500' : 'text-gray-500'
                    }`}
                  />
                </div>
              </div>
            </div>
            <div className="content w-full md:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                {post.date} at {post.time}
              </p>
              <p className="text-lg">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blogs;