import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SubscriptionPlans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // Fetch subscription plans from backend
    axios.get('http://localhost:6060/api/v1/auth/getSubscriptionPlans')
      .then(response => {
        setPlans(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching subscription plans:', error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen overflow-x-hidden">
      <h2 className="text-2xl font-bold mb-4 mt-4">
        <span className="text-red-700">Pricing</span>
      </h2>
      <p className="text-center mb-8 px-4 sm:px-8 md:px-16 lg:px-32 max-w-6xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto vitae distinctio eum impedit accusantium a, sit culpa quidem quibusdam temporibus harum nulla officia ullam laudantium eveniet blanditiis porro, mollitia molestias saepe tempora earum dolore neque
      </p>
      <h1 className="text-3xl font-bold mb-16 mt-8">Subscription Plans</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {plans.map(plan => (
          <div key={plan.plane_id} className='card-container'>
            <div className="card bg-white p-6 rounded-lg shadow-lg text-center flex flex-col justify-between max-w-xs mx-auto sm:max-w-sm mb-4 lg:mb-0">
              <div>
                <h2 className="text-2xl font-semibold mb-4">{plan.plan_name}</h2>
                <p className="text-4xl font-bold mb-6">${plan.price} <span className="text-xl">/monthly</span></p>
                <button className="w-full bg-red-700 text-white py-2 px-4 rounded mb-6">GET STARTED</button>
                <ul className="text-left space-y-5 text-xl h-64">
                  <li>✅ Access to 5 free courses monthly
                  </li>
                  <li>✅  Access to a selection of beginner-level courses</li>
                  <li>✅ Quizzes and assessments for self-evaluation</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
