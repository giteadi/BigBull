import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Importing star icons


const CourseComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedDate, setSelectedDate] = useState('All');
  const navigate = useNavigate();

  const courses = [
    { 
      id: 1, 
      title: 'React Basics', 
      category: 'React', 
      price: 49.99, 
      date: '2024-05-01', 
      pic: 'https://res.cloudinary.com/dxf0umsgw/image/upload/v1717846574/download_1_tqjmbq.png', 
      instructor: 'John Doe', 
      description: 'Learn the basics of React in this comprehensive course.', 
      rating: 4.5 
    },
    { 
      id: 2, 
      title: 'Advanced React', 
      category: 'React', 
      price: 99.99, 
      date: '2024-03-12', 
      pic: 'https://res.cloudinary.com/dxf0umsgw/image/upload/v1717846920/advancereact_polyvq.jpg', 
      instructor: 'Jane Smith', 
      description: 'Take your React skills to the next level with this advanced course.', 
      rating: 4.8 
    },
    { 
      id: 3, 
      title: 'JavaScript Basics', 
      category: 'JavaScript', 
      price: 29.99, 
      date: '2023-06-11', 
      pic: 'https://res.cloudinary.com/dxf0umsgw/image/upload/v1717846573/javascriptimage_t2rwp1.png', 
      instructor: 'Alex Johnson', 
      description: 'Master the fundamentals of JavaScript with hands-on examples.', 
      rating: 4.7 
    },
    { 
      id: 4, 
      title: 'Node.js Fundamentals', 
      category: 'Node.js', 
      price: 59.99, 
      date: '2023-04-01', 
      pic: 'https://th.bing.com/th/id/OIP.M1U-BOiIzjE8ERoPA2GqpQHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
      instructor: 'Emily Brown', 
      description: 'Learn how to build scalable web applications using Node.js.', 
      rating: 4.9 
    },
    { 
      id: 5, 
      title: 'Tailwind CSS', 
      category: 'CSS', 
      price: 19.99, 
      date: '2023-01-10', 
      pic: 'https://res.cloudinary.com/dxf0umsgw/image/upload/v1717846203/tailwindimage_erefez.jpg', 
      instructor: 'David Wilson', 
      description: 'Understand the power of CSS Flexbox layout for modern web design.', 
      rating: 4.6 
    }
  ];
  

  const categories = ['All', 'React', 'JavaScript', 'Node.js', 'CSS'];
  const priceRanges = ['All', 'Under $50', '$50 - $100', 'Above $100'];
  const dates = ['All', 'Last 30 Days', 'Last 6 Months', 'Last Year'];

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleCourseClick = (id) => {
    navigate(`/Cdetail/${id}`);
  };

  const filterByPrice = (course) => {
    switch (selectedPrice) {
      case 'Under $50':
        return course.price < 50;
      case '$50 - $100':
        return course.price >= 50 && course.price <= 100;
      case 'Above $100':
        return course.price > 100;
      default:
        return true;
    }
  };

  const filterByDate = (course) => {
    const currentDate = new Date();
    const courseDate = new Date(course.date);
    switch (selectedDate) {
      case 'Last 30 Days':
        return (currentDate - courseDate) / (1000 * 60 * 60 * 24) <= 30;
      case 'Last 6 Months':
        return (currentDate - courseDate) / (1000 * 60 * 60 * 24) <= 180;
      case 'Last Year':
        return (currentDate - courseDate) / (1000 * 60 * 60 * 24) <= 365;
      default:
        return true;
    }
  };

  const filteredCourses = courses.filter((course) => {
    return (
      (selectedCategory === 'All' || course.category === selectedCategory) &&
      filterByPrice(course) &&
      filterByDate(course)
    );
  });

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

  useEffect(() => {

    const card = document.querySelectorAll('.card');
    card.forEach((eachCard) => {
        eachCard.addEventListener('mousemove', (e) => {
            const rect = eachCard.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element.
            const y = e.clientY - rect.top;  // y position within the element.
        
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
        
            const rotateX = ((y - centerY) / centerY) * 5;
            const rotateY = ((x - centerX) / centerX) * -5;
        
            eachCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    })

    return () => {

      card.forEach((eachCard) => {
          eachCard.addEventListener('mouseleave', () => {
              eachCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
          });
      })};
  }, []);

  return (
    <CoursePage>
    <div className="container mx-auto p-4">
      <div className="text-center my-4">
        <h1 className='text-4xl font-bold text-gray-800'>Purchase Course</h1>
      </div>
<div className="flex flex-col sm:flex-row justify-around items-center mb-6">
  <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-0">
    {categories.map((category) => (
      <button 
        key={category}
        onClick={() => handleFilterClick(category)}
        className={`px-4 py-2 rounded-full transition-colors duration-300 ${
          selectedCategory === category
            ? 'bg-red-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-red-600 hover:text-white'
        }`}
      >
        {category}
      </button>
    ))}
  </div>

  <div className="flex flex-wrap justify-center gap-2">
    <div className="flex flex-col items-start">
      <label htmlFor="priceRange" className="mb-1 text-gray-700">Price Range</label>
      <select 
        id="priceRange"
        onChange={handlePriceChange} 
        className="p-2 border rounded-lg bg-gray-200 text-gray-800"
      >
        {priceRanges.map((range) => (
          <option key={range} value={range}>{range}</option>
        ))}
      </select>
    </div>
    <div className="flex flex-col items-start">
      <label htmlFor="dateRange" className="mb-1 text-gray-700">Date</label>
      <select 
        id="dateRange"
        onChange={handleDateChange} 
        className="p-2 border rounded-lg bg-gray-200 text-gray-800"
      >
        {dates.map((date) => (
          <option key={date} value={date}>{date}</option>
        ))}
      </select>
    </div>
  </div>
</div>

      <div className='container mx-auto px-4'>
      <div className=" m-4 p-4 flex justify-center">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3   max-w-5xl w-ful gap-5">

      {/* <label>Categories by Dater</label> */}
        {filteredCourses.map((course) => (
          <div className='card-container'>
          <div 
            key={course.id} 
           className="bg-white card border p-4 cursor-pointer rounded-lg shadow-lg text-black transition-transform transform hover:scale-105"
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
            <p className="text-gray-600">Category: {course.category}</p>
            <p className="text-gray-600">Price: ${course.price.toFixed(2)}</p>
            <p className="text-gray-600">Date: {new Date(course.date).toLocaleDateString()}</p>
            <div className="flex items-center">
                <p className="text-sm font-semibold sm:text-base mr-2">Rating: {course.rating}</p>
                {renderRatingStars(course.rating)}
              </div>
          </div>
          </div>
        ))}
         </div>
      </div>
      </div>

    </div>
    </CoursePage>
  );
};

export default CourseComponent;
const CoursePage = styled.div`
.card-container {
    perspective: 1000px;
}
  .course-container {
    height: 70vh;
  }
`