import React from 'react';
// import img from './../images/contact-logo.png';
// import imag from './../images/bigbulllogo.png';
const imag = 'https://media.licdn.com/dms/image/C4E0BAQE6c_gHVXL1CQ/company-logo_200_200/0/1658297696916?e=2147483647&v=beta&t=rSQBljEav4Wr94uPYEShnJIammNfmOY6mTwMQojLrYQ';
// import d from './../images/contact-logo.png';

function ContactUs() {
    const data = new Date();
    const currentYear = data.getFullYear();

    console.log(currentYear);

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
      <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
        <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
          Send Us A Message
        </h2>
        <input
          type="text"
          className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
          placeholder="Name"
        />
        <input
          type="text"
          className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
          placeholder="Email"
        />
        <input
          type="text"
          className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
          placeholder="Phone"
        />
        {/* <div className="mb-10">
          <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
            Preferred method of communication
          </h4>
          <div className="flex">
            <div className="flex items-center mr-11">
              <input
                id="radio-group-1"
                type="radio"
                name="radio-group"
                className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
              />
              <label
                htmlFor="radio-group-1"
                className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
              >
                <span className="border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 " />{" "}
                Email
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="radio-group-2"
                type="radio"
                name="radio-group"
                className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
              />
              <label
                htmlFor="radio-group-2"
                className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
              >
                <span className="border border-gray-300  rounded-full mr-2 w-4 h-4  ml-2 " />{" "}
                Phone
              </label>
            </div>
          </div>
        </div> */}
        <input
          type="text"
          className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
          placeholder="Message"
        />
        <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">
          Send
        </button>
      </div>
    </div>
  </div>
</section>

                   </>
    )
}

export default ContactUs;