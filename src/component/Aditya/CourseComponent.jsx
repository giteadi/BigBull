import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CourseComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedDate, setSelectedDate] = useState('All');
  const navigate = useNavigate();

  const courses = [
    { id: 1, title: 'React Basics', category: 'React', price: 49.99, date: '2024-05-1', pic: 'https://coursework.vschool.io/content/images/2017/08/react-banner.png' },
    { id: 2, title: 'Advanced React', category: 'React', price: 99.99, date: '2024-03-12', pic: 'https://coursework.vschool.io/content/images/2017/08/react-banner.png' },
    { id: 3, title: 'JavaScript Basics', category: 'JavaScript', price: 29.99, date: '2023-06-11', pic: 'https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo-1280x800.jpg' },
    { id: 4, title: 'Node.js Fundamentals', category: 'Node.js', price: 59.99, date: '2023-04-01', pic: 'https://th.bing.com/th/id/OIP.M1U-BOiIzjE8ERoPA2GqpQHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 5, title: 'CSS Flexbox', category: 'CSS', price: 19.99, date: '2023-01-10', pic: 'https://miro.medium.com/max/1400/1*_6ooq0R60ba3UT5c-QVemA.png' },
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

  return (
    <div className="container mx-auto p-4">
      <div className="text-center my-4">
        <h1 className='text-4xl font-bold text-gray-800'>Courses</h1>
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
          <select 
            onChange={handlePriceChange} 
            className="p-2 border rounded-lg bg-gray-200 text-gray-800"
          >
            {priceRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
          <select 
            onChange={handleDateChange} 
            className="p-2 border rounded-lg bg-gray-200 text-gray-800"
          >
            {dates.map((date) => (
              <option key={date} value={date}>{date}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <div 
            key={course.id} 
            className="bg-white border rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            onClick={() => handleCourseClick(course.id)}
          >
            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
              <img 
                src={course.pic} 
                alt={course.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h3>
            <p className="text-gray-600">Category: {course.category}</p>
            <p className="text-gray-600">Price: ${course.price.toFixed(2)}</p>
            <p className="text-gray-600">Date: {new Date(course.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseComponent;