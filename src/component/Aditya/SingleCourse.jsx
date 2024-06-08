import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaCartPlus, FaShoppingCart } from 'react-icons/fa';
// import table from '../adiAssets/table.jpg';
import table from './adiAssets/table.jpg'
import cardImage from './adiAssets/blogs.png';
import vdo from '../../Assets/hero.mp4'
const SingleCourse = () => {
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
        image: 'https://example.com/john_doe.jpg'
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
        image: 'https://example.com/jane_smith.jpg'
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
    // Other course data...
  ];

  const course = courses.find(course => course.id === parseInt(id));

  const [activeModuleIndex, setActiveModuleIndex] = useState(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);

  if (!course) {
    return <div className="container mx-auto p-4">Course not found</div>;
  }

  const toggleModule = (index) => {
    setActiveModuleIndex(activeModuleIndex === index ? null : index);
  };

  const playVideo = (videoUrl) => {
    setActiveVideoUrl(videoUrl);
  };

  return (
    <div className='relative'>
      {/* Background image */}
      {/* <img src={table} alt="table background" className='w-full h-[60vh] object-cover' /> */}
      <video src={vdo} autoPlay loop muted className='h-[50vh] w-full object-cover'></video>
      
      <div className="container mx-auto p-4">
        <h1 className='text-5xl mb-6 absolute top-[20vh] left-[40%] text-white font-bold'>{course.title}</h1>
        <p className='text-2xl mb-4 font-bold'>Category: {course.category}</p>
        <p className='text-xl font-bold'>{course.description}</p>
      </div>

      {/* Right card section */}
      <div className='absolute top-1/4 right-10 bg-white p-4 shadow-lg border-2 border-gray-300 h-full flex flex-col flex-wrap w-[20vw]'>
        <div className='mb-4'>
          <img src={cardImage} alt="course image" className='w-full h-auto' />
        </div>

        {/* Price */}
        <div className='flex item-center gap-4'>
         <p className='font-bold '>Price</p> <span className='font-bold'>{course.price}</span>
        </div>        
        {/* Add to Cart button */}
        <div className='mb-2'>
          <button className='flex items-center justify-center w-full p-2 bg-blue-500 text-white rounded'>
            <FaCartPlus className='mr-2' /> Add to Cart
          </button>
        </div>

        {/* Buy Now button */}
        <div>
          <button className='flex items-center justify-center w-full p-2 bg-green-500 text-white rounded'>
            <FaShoppingCart className='mr-2' /> Buy Now
          </button>
        </div>
        
        {/* Instructor Details */}
        <div className='mb-4 mt-[12vh]'>
          <p className='font-bold'>Instructor: {course.instructor.name}</p>
          <p>{course.instructor.bio}</p>
        </div>
      </div>

      {/* Course Module Section */}
      <div>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl mb-4 flex items-center justify-center font-bold text-3xl">Modules</h2>
        {course.modules.map((module, index) => (
          <div key={index} >
            <button
                className="w-[73vw] text-left p-2 bg-red-600 text-white mb-2 rounded-lg transition-all hover:bg-red-700 hover:text-white delay-100"

              onClick={() => toggleModule(index)}
            >
              {module.title}
            </button>
            {activeModuleIndex === index && (
              <ul className="pl-4 list-disc">
                {module.submodules.map((submodule, subIndex) => (
                  <li key={subIndex} className="mb-1">
                    <button 
                      className="text-blue-500 hover:underline" 
                      onClick={() => playVideo(submodule.videoUrl)}
                    >
                      {submodule.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Video Section */}
      {activeVideoUrl && (
        <div className="container mx-auto p-4">
          <h2 className="text-2xl mb-4">Video</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="560"
              height="315"
              src={activeVideoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default SingleCourse;
