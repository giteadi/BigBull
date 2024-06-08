import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="bg-red-600 text-white flex items-center justify-center text-4xl py-4">
        About Us
      </h1>
      <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
        <p className="text-lg mb-4">
          Welcome to our website! We are a passionate team of developers, designers, and content creators dedicated to providing the best resources and information for our audience. Our mission is to share knowledge, inspire creativity, and foster a community of learners and innovators.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg mb-4">
          Our vision is to become a leading platform for learning and innovation. We aim to provide high-quality content, tutorials, and resources that empower individuals to learn new skills, enhance their knowledge, and achieve their goals.
        </p>
        <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="team-member p-4 bg-gray-100 rounded-lg text-center">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team Member" 
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
          <div className="team-member p-4 bg-gray-100 rounded-lg text-center">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team Member" 
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">UI/UX Designer</p>
          </div>
          <div className="team-member p-4 bg-gray-100 rounded-lg text-center">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team Member" 
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Emily Johnson</h3>
            <p className="text-gray-600">Content Writer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
