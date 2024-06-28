import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const CourseComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedDate, setSelectedDate] = useState('All');
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const categories = ['All', 'React', 'JavaScript', 'Node.js', 'CSS','Financial education'];
  const priceRanges = ['All', 'Under $50', '$50 - $100', 'Above $8000'];
  const dates = ['All', 'Last 30 Days', 'Last 6 Months', 'Last Year'];

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:6060/api/v1/auth/getAllCourses');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCourses(data.result); // Update state with fetched courses
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
    const courseDate = new Date(course.created_at);
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
      (selectedCategory == 'All' || course.category === selectedCategory) &&
      filterByPrice(course) &&
      filterByDate(course)
    );
  });

  // const renderRatingStars = (rating) => {
  //   const fullStars = Math.floor(rating);
  //   const halfStar = rating % 1 !== 0;
  //   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  // }
  //   return (
  //     <>
  //       {[...Array(fullStars)].map((_, index) => (
  //         <FaStar key={index} className="text-yellow-500" />
  //       ))}
  //       {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
  //       {[...Array(emptyStars)].map((_, index) => (
  //         <FaRegStar key={index} className="text-yellow-500" />
  //       ))}
  //     </>
  //   );
  // };

  return (
    <CoursePage>
      <div className="container mx-auto p-4 pt-0">
        <div className="text-center mb-4">
          <h1 className="text-8xl font-bold text-gray-800 card border-0 mb-10">Courses</h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-around items-center mb-6">
          <div className="flex flex-wrap justify-center gap-2 sm:mb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterClick(category)}
                className={`px-4 py-1 border-1 border-rose-500 rounded-2xl transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-red text-gray-800 hover:bg-red-600 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <div className="flex flex-col items-start">
              <label htmlFor="priceRange" className="mb-1 text-gray-700">
                Price Range
              </label>
              <select
                id="priceRange"
                onChange={handlePriceChange}
                className="p-2 border-1 border-rose-500 rounded-lg bg-white text-gray-800"
              >
                {priceRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="dateRange" className="mb-1  text-gray-700">
                Date
              </label>
              <select
                id="dateRange"
                onChange={handleDateChange}
                className="p-2 rounded-lg border-1 border-rose-500 bg-white text-gray-800"
              >
                {dates.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className=" m-4 p-4 flex justify-center">
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3   max-w-5xl w-ful gap-5">
              {filteredCourses.map((course) => (
                <div className="card-container" key={course.course_id}>
                  <div
                    className="bg-white card border p-4 cursor-pointer rounded-lg shadow-lg text-black transition-transform transform hover:scale-105"
                    onClick={() => handleCourseClick(course.course_id)}
                  >
                    <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                      <img
                        src={course.thumbnails}
                        alt={course.course_name}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1">{course.course_name}</h3>
                    <p className="text-gray-600">Category: {course.category}</p>
                    <p className="text-gray-600">Price: ${course.price}</p>
                    <p className="text-gray-600">Date: {new Date(course.created_at).toLocaleDateString()}</p>
                    {/* <div className="flex items-center">
                      <p className="text-sm font-semibold sm:text-base mr-2">Rating: {renderRatingStars(course.rating)}</p>
                      {renderRatingStars(course.rating)}
                    </div> */}
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
`;
