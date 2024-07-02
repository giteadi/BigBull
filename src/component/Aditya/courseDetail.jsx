import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

const CourseDetail = () => {
<<<<<<< HEAD
    const { id } = useParams();
    const courses = [
        {
          id: 1,
          title: 'React Basics',
          category: 'React',
          description: 'Learn the basics of React.',
          price: "10,000",
          instructor: {
            name: 'John Doe',
            bio: 'Experienced React developer with a passion for teaching.',
            image: 'https://wallpaperbat.com/img/7200619-anime-man-in-lofi-desktop-room-wallpaper.png'
          },
          modules: [
            {
              title: 'Introduction to React',
              submodules: [
                { title: 'What is React?', videoUrl: 'https://www.youtube.com/embed/vz1RlUyrc3w' },
                { title: 'Getting Started with React', videoUrl: 'https://www.youtube.com/embed/vz1RlUyrc3w' }
              ]
            },
            {
              title: 'React Components',
              submodules: [
                { title: 'Functional Components', videoUrl: 'https://www.youtube.com/embed/vz1RlUyrc3w' },
                { title: 'Class Components', videoUrl: 'https://www.youtube.com/embed/vz1RlUyrc3w' }
              ]
            },
          ],
        },
        {
          id: 3,
          title: 'JavaScript Basics',
          category: 'JavaScript',
          description: 'Learn the basics of JavaScript.',
          price: "4500",
          instructor: {
            name: 'Jane Smith',
            bio: 'JavaScript enthusiast with a knack for simplifying complex concepts.',
            image: 'https://wallpaperbat.com/img/7200619-anime-man-in-lofi-desktop-room-wallpaper.png'
          },
          modules: [
            {
              title: 'Introduction to JavaScript',
              submodules: [
                { title: 'JavaScript Fundamentals', videoUrl: 'https://www.youtube.com/embed/ajdRvxDWH4w' },
                { title: 'Variables and Data Types', videoUrl: 'https://www.youtube.com/embed/ajdRvxDWH4w' }
              ]
            },
            {
              title: 'JavaScript Functions',
              submodules: [
                { title: 'Defining Functions', videoUrl: 'https://www.youtube.com/embed/ajdRvxDWH4w' },
                { title: 'Function Expressions', videoUrl: 'https://www.youtube.com/embed/ajdRvxDWH4w' }
              ]
            },
          ],
        },
      ];
=======
  const { id } = useParams();
  const [course, setCourse] = useState(null); // State to hold course details
  const [loading, setLoading] = useState(true); // State to manage loading state
>>>>>>> e3259dd8213f4ffb00385460325c86c7b7e353ba

  const fetchCourse = async () => {
    try {
      const response = await fetch(`http://localhost:6060/api/v1/auth/coursePage/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch course data');
      }
      const data = await response.json();
      setCourse(data[0]); // Assuming API returns an array with one course object
      setLoading(false); // Update loading state
    } catch (error) {
      console.error('Error fetching course:', error);
      // Handle error state here (e.g., setCourse(null), display an error message)
      setLoading(false); // Update loading state even on error
    }
  };
  
  useEffect(() => {
    fetchCourse();
  }, [id]);

  if (loading) {
    return <div className="container mx-auto p-4 text-center">Loading...</div>;
  }

  if (!course) {
    return <div className="container mx-auto p-4 text-center text-red-600">Course not found</div>;
  }

  return (
    <div className="bg-gray-100 p-6">
      {/* Header Section */}
      <header className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="mb-4">
              <span className="text-blue-600 text-sm">{course.category}</span>
              <span className="text-gray-500 text-sm ml-2">Photography</span>
            </div>
            <h1 className="text-3xl font-bold mb-4">{course.course_name}</h1>
            <p className="text-gray-600 mb-4">
              {course.description}
            </p>
            <div className="flex flex-wrap space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md mb-2">Start learning now</button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md mb-2">Add to favorites</button>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="bg-blue-50 p-4 rounded-lg shadow-md">
<<<<<<< HEAD
              <img src="https://wallpaperbat.com/img/7200619-anime-man-in-lofi-desktop-room-wallpaper.png" alt="Course Image" className="w-full rounded-lg mb-4" />
=======
              <img src={course.thumbnails} alt="Course Image" className="w-full rounded-lg mb-4" />
>>>>>>> e3259dd8213f4ffb00385460325c86c7b7e353ba
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Duration</span>
                  <span>8h 40m</span>
                </div>
                {/* Add more details like Language, Level, Students, Price dynamically */}
                <div className="flex justify-between">
                  <span className="text-gray-500">Price</span>
                  <span>{`$${course.price}`}</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white w-full mt-4 py-2 rounded-md">Start learning</button>
            </div>
          </div>
        </div>
        {/* Navigation Section */}
        <nav className="mt-6">
          <ul className="flex flex-wrap space-x-6">
            <li><a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-2">About Course</a></li>
            {/* Add more navigation links like Course Objective, Requirements, Course Review, FAQs */}
          </ul>
        </nav>
      </header>

      {/* About Course Section */}
      <section className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">About Course</h2>
        <p className="text-gray-600 mb-4">
          If you would like to get started as a front end web developer, you are going to LOVE this course! Work on projects ranging from a simple HTML page to a complete Javascript based Google Chrome extension. We will cover the following technologies in this course:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Web development basics with HTML</li>
          <li>Cascading Style Sheets (CSS)</li>
          <li>JavaScript programming</li>
          <li>Creating interactive web pages</li>
          <li>JavaScript based browser extensions</li>
        </ul>
        <button className="text-blue-600">Show More</button>
      </section>

      {/* Intended Learning Objectives Section */}
      <section className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Intended Learning Objectives</h2>
        <ul className="list-none space-y-4">
          <li className="flex items-start">
            <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">✔️</span>
            <span>Identify ways that communication can happen.</span>
          </li>
          <li className="flex items-start">
            <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">✔️</span>
            <span>Listen actively and effectively.</span>
          </li>
          <li className="flex items-start">
            <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">✔️</span>
            <span>Identify the benefits of emotional intelligence.</span>
          </li>
          <li className="flex items-start">
            <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">✔️</span>
            <span>Identify methods for overcoming barriers to communication.</span>
          </li>
          <li className="flex items-start">
            <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">✔️</span>
            <span>Relate emotional intelligence to the workplace.</span>
          </li>
        </ul>
      </section>

      {/* Instructors Section */}
      <section className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Instructors</h2>
        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4">
          <div className="flex-1 mb-6 lg:mb-0  max-w-sm ">
            <img src="https://wallpaperbat.com/img/7200619-anime-man-in-lofi-desktop-room-wallpaper.png" alt="Instructor 1" className="w-full rounded-lg mb-4m-auto	" />
            <h3 className="text-lg font-bold">Moatasem abd-Alatif</h3>
            <p className="text-gray-600">Product Strategy</p>
            <p className="text-gray-600 text-sm">This is my first course in Teachable, and with this course, I've seen a wonderful first class to jump into the world of data science.</p>
          </div>
          <div className="flex-1  max-w-sm ">
            <img src="https://wallpaperbat.com/img/7200619-anime-man-in-lofi-desktop-room-wallpaper.png" alt="Instructor 2" className="w-full rounded-lg mb-4 m-auto" />
            <h3 className="text-lg font-bold">Mostafa samir</h3>
            <p className="text-gray-600">Frontend Designer</p>
            <p className="text-gray-600 text-sm">This is my first course in Teachable, and with this course, I've seen a wonderful first class to jump into the world of data science.</p>
          </div>
        </div>
      </section>

      {/* Recommended Courses Section */}
      <section className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img src="https://wallpaperbat.com/img/7200619-anime-man-in-lofi-desktop-room-wallpaper.png" alt="Recommended Course 1" className="w-full rounded-lg mb-4 " />
              <h3 className="text-lg font-bold">Course 1</h3>
              <p className="text-gray-600 text-sm">Description of the recommended course 1.</p>
              <button className="bg-blue-600 text-white w-full py-2 rounded-md mt-4">Add to Cart</button>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img src="https://wallpaperbat.com/img/7200619-anime-man-in-lofi-desktop-room-wallpaper.png" alt="Recommended Course 2" className="w-full rounded-lg mb-4" />
              <h3 className="text-lg font-bold">Course 2</h3>
              <p className="text-gray-600 text-sm">Description of the recommended course 2.</p>
              <button className="bg-blue-600 text-white w-full py-2 rounded-md mt-4">Add to Cart</button>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img src="https://wallpaperbat.com/img/7200619-anime-man-in-lofi-desktop-room-wallpaper.png" alt="Recommended Course 3" className="w-full rounded-lg mb-4" />
              <h3 className="text-lg font-bold">Course 3</h3>
              <p className="text-gray-600 text-sm">Description of the recommended course 3.</p>
              <button className="bg-blue-600 text-white w-full py-2 rounded-md mt-4">Add to Cart</button>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <img src="https://wallpaperbat.com/img/7200619-anime-man-in-lofi-desktop-room-wallpaper.png" alt="Recommended Course 4" className="w-full rounded-lg mb-4" />
              <h3 className="text-lg font-bold">Course 4</h3>
              <p className="text-gray-600 text-sm">Description of the recommended course 4.</p>
              <button className="bg-blue-600 text-white w-full py-2 rounded-md mt-4">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
      {/* Reviews and Ratings Section */}
      <section className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Reviews and Ratings</h2>
        <div className="flex items-center mb-4">
          <div className="mr-2">⭐️⭐️⭐️⭐️⭐️</div>
          <div className="text-gray-600">5.0 (256 Reviews)</div>
        </div>
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
              <div>
                <div className="font-bold">John Doe</div>
                <div className="text-gray-600">2 days ago</div>
              </div>
            </div>
            <div className="text-gray-600">"Great course, highly recommended!"</div>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
              <div>
                <div className="font-bold">Jane Smith</div>
                <div className="text-gray-600">5 days ago</div>
              </div>
            </div>
            <div className="text-gray-600">"I learned a lot, thank you!"</div>
          </div>
          {/* Add more reviews here */}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">FAQs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">What is the duration of the course?</h3>
            <p className="text-gray-600">The course duration is 8 hours and 40 minutes.</p>
          </div>
          <div>
            <h3 className="font-bold">Is the course free?</h3>
            <p className="text-gray-600">Yes, the course is free.</p>
          </div>
          {/* Add more FAQs here */}
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;