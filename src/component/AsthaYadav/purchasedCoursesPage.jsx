import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Importing star icons
import rct from '../../Assets/Astha/logo.png';

const PurchasedCoursesPage = () => {
  const navigate = useNavigate();

  const userPurchasedCourses = [
    { id: 1, title: 'React Basics', instructor: 'John Doe', description: 'Learn the basics of React in this comprehensive course.', pic: 'https://res.cloudinary.com/dxf0umsgw/image/upload/v1717846574/download_1_tqjmbq.png', rating: 4.5 },
    { id: 2, title: 'Advanced React', instructor: 'Jane Smith', description: 'Take your React skills to the next level with this advanced course.', pic: 'https://res.cloudinary.com/dxf0umsgw/image/upload/v1717846920/advancereact_polyvq.jpg', rating: 4.8 },
    { id: 3, title: 'JavaScript Basics', instructor: 'Alex Johnson', description: 'Master the fundamentals of JavaScript with hands-on examples.', pic: ' https://res.cloudinary.com/dxf0umsgw/image/upload/v1717846573/javascriptimage_t2rwp1.png', rating: 4.7 },
    { id: 4, title: 'Node.js Fundamentals', instructor: 'Emily Brown', description: 'Learn how to build scalable web applications using Node.js.', pic: 'https://th.bing.com/th/id/OIP.M1U-BOiIzjE8ERoPA2GqpQHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', rating: 4.9 },
    { id: 5, title: 'Tailwind CSS', instructor: 'David Wilson', description: 'Understand the power of CSS Flexbox layout for modern web design.', pic: 'https://res.cloudinary.com/dxf0umsgw/image/upload/v1717846203/tailwindimage_erefez.jpg', rating: 4.6 },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCourseClick = (id) => {
    navigate(`/course/${id}`);
  };

  const filteredCourses = userPurchasedCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) || course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) || course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} className="text-yellow-500" />
        ))}
      </>
    );
  };

  return (
    <div className="container mx-auto bg-gray-100 px-4">
      <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold text-2xl sm:text-3xl lg:text-4xl py-6 w-full mb-8 rounded-lg shadow-lg relative flex justify-center items-center overflow-hidden">
        <img src={rct} alt="React Logo" className="w-20 h-20 sm:w-16 sm:h-16 mr-4 animate-spin-slow" />
        <span className="animate-bounce">Your Purchased Courses</span>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 pointer-events-none"></div>
      </header>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by title, instructor, or description..."
          className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring focus:ring-pink-200"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="m-4 p-4 flex justify-center">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3   max-w-5xl w-ful gap-5">
          {filteredCourses.map(course => (
            <div 
              key={course.id} 
              className="bg-white border p-4 cursor-pointer rounded-lg shadow-lg text-black transition-transform transform hover:scale-105"
              onClick={() => handleCourseClick(course.id)}
            >
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={course.pic} 
                  alt={course.title} 
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1">{course.title}</h3>
              <p className="text-sm sm:text-base mb-2">{course.instructor}</p>
              <p className="text-sm sm:text-base font-serif mb-2">{course.description}</p>
              <div className="flex items-center">
                <p className="text-sm font-semibold sm:text-base mr-2">Rating: {course.rating}</p>
                {renderRatingStars(course.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurchasedCoursesPage;