import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const initialPosts = [
    {
      id: 1,
      title: 'First Post',
      subtitle: 'Understanding Stock Markets',
      date: '2024-06-06',
      time: '10:00 AM',
      content: 'Learn about the intricacies of stock markets, including trading strategies, market trends, and investment opportunities.',
      image: 'https://media5.newsnationtv.com/images/2023/06/27/untitled90867-954.jpg',
      liked: false,
    },
    {
      id: 2,
      title: 'Second Post',
      subtitle: 'Stock Market Basics',
      date: '2024-06-07',
      time: '11:00 AM',
      content: 'Discover the fundamentals of the stock market, such as types of stocks, risk management, and economic indicators.',
      image: 'https://www.gettogetherfinance.com/blog/wp-content/uploads/2023/12/Learn-about-the-stock-market-1024x597.jpg',
      liked: false,
    },
    {
      id: 3,
      title: 'Third Post',
      subtitle: 'Investment Strategies',
      date: '2024-06-08',
      time: '12:00 PM',
      content: 'Explore effective investment strategies in the stock market, including long-term investing, day trading, and diversification.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRvyoR2olim09uWzPOnvxtdC-o3jMnZmvBna4AbZ92PZtMYisifA36-y4DCLT0PSWQ9xM&usqp=CAU',
      liked: false,
    },
    {
      id: 4,
      title: 'Fourth Post',
      subtitle: 'Market Analysis',
      date: '2024-06-09',
      time: '01:00 PM',
      content: 'Stay informed with in-depth market analysis covering sectors, company performance, and global economic influences.',
      image: 'https://www.acquisition-international.com/wp-content/uploads/2020/12/marketing.jpg',
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
    <div className="container mx-auto p-4 max-w-screen-xl">
      <h1 className="text-black flex items-center justify-center font-semibold text-5xl py-4 ">
       Blogs
      </h1>
      <div className="posts mt-8 space-y-8">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className={`flex flex-col md:flex-row items-center gap-10 my-20 ${
              index % 2 === 0 ? 'blog-left' : 'blog-right'
            }`}
            // onClick={() => handlePost(post.id)} // Pass post id to handlePost
          >
            {index % 2 === 0 ? (
              <>
                <div className="md:ml-6 md:mr-6 mt-4 md:mt-0">
                  <h2 className="text-md text-4xl text-red-700 font-bold">{post.title}</h2>
                  <h2 className="text-xxl text-2xl font-bold my-3">{post.subtitle}</h2>
                  <p className="mt-2 text-gray-600 text-1xl leading-loose">{post.content}</p>
                  <p className="text-sm text-gray-600">
                    {post.date} at {post.time}
                  </p>
                  <div
                    className="absolute bottom-10 right-10 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click event from propagating to parent
                      // handleLikeClick(post.id);
                    }}
                  >
                    
                  </div>
                </div>
                <img
                  src={post.image}
                  alt="Blog Post"
                  className="w-full md:w-1/4 rounded-md cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent click event from propagating to parent
                    // handlePost(post.id);
                  }}
                />
              </>
            ) : (
              <>
                <img
                  src={post.image}
                  alt="Blog Post"
                  className="w-full md:w-1/4 rounded-md cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent click event from propagating to parent
                    handlePost(post.id);
                  }}
                />
                <div className="md:ml-6 md:mr-6 mt-4 md:mt-0">
                  <h2 className="text-md text-4xl text-red-700 font-bold">{post.title}</h2>
                  <h2 className="text-xxl text-2xl font-bold my-3">{post.subtitle}</h2>
                  <p className="mt-2 text-gray-600 text-1xl leading-loose">{post.content}</p>
                  <p className="text-sm text-gray-600">
                    {post.date} at {post.time}
                  </p>
                  <div
                    className="absolute bottom-10 right-10 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click event from propagating to parent
                      // handleLikeClick(post.id);
                    }}
                  >
                    
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
