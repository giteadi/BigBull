import React, { useEffect, useState } from 'react';
// import bgvdo from '../adiAssets/3dChart.mp4';
// import babbar from '../adiAssets/babbar.jpeg'
// import striver from '../adiAssets/striver.jpg';
// import shardha from '../adiAssets/shradha.jpg'
const babbar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqJzQlE8eNkc--ncTm9P9RtYZFUgwMe5XGQ&s';
const striver = 'https://sm.ign.com/ign_in/screenshot/default/techno-gamers-supergaming_dq2x.jpg'
const shardha = 'https://sm.ign.com/ign_in/screenshot/default/techno-gamers-supergaming_dq2x.jpg';

const About = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto p-4 relative">
      {/* Bg Video */}
      {/* <video src={bgvdo} autoPlay muted loop className='bg-video absolute inset-0 w-full h-full object-cover'></video> */}
      <h1 className={`text-black flex items-center justify-center text-4xl py-4 transform transition-transform duration-1000 ${animate ? 'translate-x-full' : 'translate-x-0'} font-bold`}>
        About Us
      </h1>
      <div className="mt-8 p-6 shadow-lg rounded-lg relative z-10 ">
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
        <p className="text-lg mb-4">
          Welcome to our website! We are a passionate team of developers,
          designers, and content creators dedicated to providing the best
          resources and information for our audience. Our mission is to share
          knowledge, inspire creativity, and foster a community of learners and
          innovators.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg mb-4">
          Our vision is to become a leading platform for learning and
          innovation. We aim to provide high-quality content, tutorials, and
          resources that empower individuals to learn new skills, enhance their
          knowledge, and achieve their goals.
        </p>
        <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="team-member p-4 bg-slate-400 rounded-lg text-center shadow-lg bg-opacity-50">
        <img
              src={babbar}
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Love Babbar</h3>
            <p className=" font-semibold">Lead Developer</p>
          </div>
          <div className="team-member p-4 bg-slate-400 rounded-lg text-center shadow-lg bg-opacity-50">
            <img
              src={striver}
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Striver</h3>
            <p className="font-semibold">UI/UX Designer</p>
          </div>
          <div className="team-member p-4 bg-slate-400 rounded-lg text-center shadow-lg bg-opacity-50">
            <img
              src={shardha}
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Emily Johnson</h3>
            <p className="font-semibold">Content Writer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;