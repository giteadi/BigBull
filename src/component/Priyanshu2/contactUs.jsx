import React, { useState, useRef } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [phoneError, setPhoneError] = useState('');

  const nameInputRef = useRef(null); // Ref for accessing name input

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent phone input from exceeding 10 digits
    if (name === 'phone' && value.length > 10) {
      return;
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Validate phone number format (exactly 10 digits)
    if (name === 'phone') {
      if (value.length === 10) {
        setPhoneError('');
      } else {
        setPhoneError('Phone number must be exactly 10 digits');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submission
    if (phoneError !== '') {
      return; // Prevent submission if there are errors
    }

    // Handle form submission logic here, e.g., sending data to backend
    console.log(formData);

    // Clearing inputs after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    // Focusing on name input after submission (optional)
    nameInputRef.current.focus();
  };


  return (
    <>  
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src="https://pagedone.io/asset/uploads/1696488602.png"
                    alt="ContactUs tailwind section"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700"
                  />
                  <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  </div>
                </div>
              </div>
            </div>
            <div className=" p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
                Send Us A Message
              </h2>
              <form onSubmit={handleSubmit}>
                <input
                  ref={nameInputRef}
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                  placeholder="Name"
                />
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border ${phoneError ? 'border-red-500' : 'border-gray-200'} focus:outline-none pl-4 mb-2`}
                  placeholder="Phone (10 digits)"
                />
                {phoneError && <p className="text-red-500 text-sm mb-2">{phoneError}</p>}
                <input
                  type="text"
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                  placeholder="Message"
                />
                <button type="submit" className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
