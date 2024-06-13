import React from 'react';

const SubscriptionPlans = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen overflow-x-hidden">
      <h2 className="text-2xl font-bold mb-4 mt-4">
        <span className="text-red-700">Pricing</span>
      </h2>
      <p className="text-center mb-8 px-4 sm:px-8 md:px-16 lg:px-32">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto vitae distinctio eum impedit accusantium a, sit culpa quidem quibusdam temporibus harum nulla officia ullam laudantium eveniet blanditiis porro, mollitia molestias saepe tempora earum dolore neque cupiditate? Distinctio, illo obcaecati?
      </p>
      <h1 className="text-3xl font-bold mb-16 mt-8">Subscription Plans</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-between max-w-xs mx-auto sm:max-w-sm mb-4 lg:mb-0">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Basic Plan</h2>
            <p className="text-4xl font-bold mb-6">$9.99 <span className="text-xl">/monthly</span></p>
            <button className="w-full bg-red-700 text-white py-2 px-4 rounded mb-6">GET STARTED</button>
            <ul className="text-left space-y-2">
              <li>✅ Access to 5 free courses monthly</li>
              <li>✅ Access to a selection of beginner-level courses</li>
              <li>✅ Quizzes and assessments for self-evaluation</li>
              <li>✅ Limited access to community forums</li>
            </ul>
          </div>
        </div>
        <div className="bg-black text-white p-8 rounded-lg shadow-lg text-center flex flex-col justify-between transform scale-105 max-w-xs mx-auto sm:max-w-sm mb-4 lg:mb-0">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Premium Plan</h2>
            <p className="text-4xl font-bold mb-4">$29.99 <span className="text-xl">/monthly</span></p>
          </div>
          <button className="bg-red-700 text-white py-2 px-4 rounded mb-4">GET STARTED</button>
          <ul className="text-left space-y-2">
            <li>✅ Access to 20 free courses monthly</li>
            <li>✅ All features from the Pro Plan</li>
            <li>✅ One-on-one virtual tutoring sessions with educators</li>
            <li>✅ Exclusive access to premium masterclasses and workshops</li>
            <li>✅ Priority customer support for a seamless learning experience</li>
            <li>✅ Unlimited offline access to course materials for on-the-go learning</li>
            <li>✅ Early access to new course releases for staying ahead in your field</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-between max-w-xs mx-auto sm:max-w-sm mb-4 lg:mb-0">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Pro Plan</h2>
            <p className="text-4xl font-bold mb-6">$19.99 <span className="text-xl">/monthly</span></p>
            <button className="w-full bg-red-700 text-white py-2 px-4 rounded mb-6">GET STARTED</button>
            <ul className="text-left space-y-2">
              <li>✅ Access to 10 free courses monthly</li>
              <li>✅ All features from the Basic Plan</li>
              <li>✅ Full access to intermediate and advanced courses</li>
              <li>✅ Instructor-led live Q&A sessions</li>
              <li>✅ Peer-graded assignments for hands-on learning</li>
              <li>✅ Enhanced community forum access</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;