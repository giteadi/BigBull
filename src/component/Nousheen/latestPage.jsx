import React from 'react';

const LatestPage = () => {
  const blogPosts = [
    {
      title:"UI DESIGN",
      subtitle: "Card UI Examples And Best Practices For Product Owners ",
      description: "Now in 2022,more than 2.7 billion app users in the world prefer Andriod apps.We follow the google design principles and the design thinking process to create seamless user experiences and aesthetic interfaces for mobile apps for the andriod platform. We make android apps more relevant to users that users love to use and bring your business experience to the next level.",
      imgSrc: "https://fireartstudio.s3-accelerate.amazonaws.com/wp-content/uploads/2020/01/89995925f3fd323ce138bf8024cad9f1.png"
    },
    {
      title: "UI DESIGN",
      subtitle: "Card UI Examples And Best Practices For Product Owners",
      description: "Now in 2022,more than 2.7 billion app users in the world prefer Andriod apps.We follow the google design principles and the design thinking process to create seamless user experiences and aesthetic interfaces for mobile apps for the andriod platform. We make android apps more relevant to users that users love to use and bring your business experience to the next level.",
      imgSrc: "https://fireartstudio.s3-accelerate.amazonaws.com/wp-content/uploads/2020/01/89995925f3fd323ce138bf8024cad9f1.png"
    }
  ];

  return (
    <div className="container mx-auto p-4 max-w-screen-xl">
       <div key={0} className={`flex flex-col md:flex-row items-center gap-10 my-10 sm:my-20 blog-left `}>
          <div className="md:ml-6 md:mr-6 mt-4 md:mt-0">
            <h2 className="text-md text-4xl	text-red-700 font-bold">{blogPosts[0].title}</h2>
            <h2 className="text-xxl text-2xl font-bold my-3">{blogPosts[0].subtitle}</h2>
            <p className="mt-2 text-gray-600 text-1xl leading-loose	">{blogPosts[0].description}</p>
          </div>  
          <img src={blogPosts[0].imgSrc} alt="Blog Post" className="w-full md:w-1/4 rounded-md" />
        </div>
       <div key={1} className={`flex flex-col md:flex-row items-center gap-10 my-10 sm:my-20 blog-right`}>
          <div className="md:ml-6 md:mr-6 mt-4 md:mt-0 md:order-2">
            <h2 className="text-md text-4xl	text-red-700 font-bold">{blogPosts[1].title}</h2>
            <h2 className="text-xxl text-2xl font-bold my-3">{blogPosts[1].subtitle}</h2>
            <p className="mt-2 text-gray-600 text-1xl leading-loose	">{blogPosts[1].description}</p>
          </div>  
          <img src={blogPosts[1].imgSrc} alt="Blog Post" className="w-full md:w-1/4 rounded-md md:order-1" />
        </div>
    </div>
  );
};

export default LatestPage;