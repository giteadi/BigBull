import React, { useRef, useState } from 'react';

const Defaulcourses = [
  {
    courseName: "Introduction to JavaScript",
    level: "Beginner",
    duration: "4 weeks",
    lecture: "20 lectures",
    price: "50",
    nameOfInstructor: "John Doe",
    coverImage: 'https://media.licdn.com/dms/image/D4D22AQFd7AgxnSHIlw/feedshare-shrink_800/0/1684770730807?e=2147483647&v=beta&t=KmeV-afOm69UQLUm0u3UXl-l__2ImWX7Uz-DyuaqvJ8'
  },
  {
    courseName: "Advanced React",
    level: "Advanced",
    duration: "6 weeks",
    lecture: "30 lectures",
    price: "100",
    nameOfInstructor: "Jane Smith",
    coverImage: 'https://media.licdn.com/dms/image/D4D22AQFd7AgxnSHIlw/feedshare-shrink_800/0/1684770730807?e=2147483647&v=beta&t=KmeV-afOm69UQLUm0u3UXl-l__2ImWX7Uz-DyuaqvJ8'
  },
  {
    courseName: "Data Structures and Algorithms",
    level: "Intermediate",
    duration: "8 weeks",
    lecture: "40 lectures",
    price: "75",
    nameOfInstructor: "Alice Johnson",
    coverImage: 'https://media.licdn.com/dms/image/D4D22AQFd7AgxnSHIlw/feedshare-shrink_800/0/1684770730807?e=2147483647&v=beta&t=KmeV-afOm69UQLUm0u3UXl-l__2ImWX7Uz-DyuaqvJ8'
  },
  {
    courseName: "Full-Stack Web Development",
    level: "Advanced",
    duration: "12 weeks",
    lecture: "60 lectures",
    price: "200",
    nameOfInstructor: "Michael Brown",
    coverImage: 'https://media.licdn.com/dms/image/D4D22AQFd7AgxnSHIlw/feedshare-shrink_800/0/1684770730807?e=2147483647&v=beta&t=KmeV-afOm69UQLUm0u3UXl-l__2ImWX7Uz-DyuaqvJ8'
  }
];
const defaultCharges = {
  discount: 18,
  tax: 18,
}
const Cart = () => {
const [cartCourses, setCartCourses] = useState(Defaulcourses);
const [charges, setCharges] = useState();
const [calculation, setCalculation] = useState();



  return (
    <>     
      <section style={{minHeight: '70vh'}} className="py-6 pt-0 ">
        <div className="container">
        <h4 className="card-title mb-10 text-5xl font-bold">Your Course</h4>
          <div className="flex flex-wrap">
            <div className="lg:w-3/4 w-full mb-6 lg:mb-0">
      
              <div className="card border-0">
                <div className="p-4 border-1 rounded-lg me-10">
                  {cartCourses.map((course) =>   <article   
                      style={{
                      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} 
                      className="flex flex-wrap mb-4 p-4 ">
                        
                    <div className="lg:w-8/12 w-full flex ">
                      <figure className="flex me-lg-5">
                        <div className="flex-shrink-0 w-36">
                            <img src={`${course.coverImage}`} className="object-cover rounded-md w-full h-full" alt="Item" />
                            </div>
                        <figcaption className="ml-4">
                          <div className="text-xl font-bold">{course.courseName}</div>
                          <i className="text-gray-500 text-sm "> {course.nameOfInstructor} </i>
                          <ul className='mt-2'>
                            <li className='list-disc text-xs ms-3'>{course.level}</li>
                            <li className='list-disc text-xs ms-3'>{course.duration}</li>
                            <li className='list-disc text-xs ms-3'>{course.lecture}</li>
                          </ul>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="self-center">
                      <div className="price-wrap lh-sm">
                        <var className="price text-2xlfont-semibold ">{`₹ ${course.price}`}</var>  <br />
                        </div>
                    </div>
                    <div className="flex m self-center justify-self-end	grow justify-end	">
                      <div className="space-x-2">
                        <p href="#" className="btn btn-light text-red-500">Remove</p>
                      </div>
                    </div>
                  </article>)}
                
                </div>
      
              </div>
            </div>
            <aside className="lg:w-1/4 w-full">
            <div className="card">
                <div className="card-body">
                  <dl className="dlist-align ">
                    <dt>Total price:</dt>
                    <dd className="text-end">{`₹ ${cartCourses.reduce((sum, cartCourses) => sum + Number(cartCourses.price), 0)}`}</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Discount:</dt>
                    <dd className="text-end text-green-500">
                    {`₹ ${cartCourses.reduce((sum, course) => sum + Number(course.price), 0) * 0.82}`}</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>TAX:</dt>
                    <dd className="text-end">₹ 456</dd>
                  </dl>
                  <hr />
                  <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="text-end text-lg font-semibold">₹ 357.90</dd>
                  </dl>
                  
                  <div className="my-3 space-y-2">
                    <button className="bg-red-600 py-2 rounded-lg text-white text-lg w-full">Make Purchase</button>
                    <button className="btn btn-light w-full">Back to Courses</button>
                  </div>
                </div>
              </div>
      
            </aside>
          </div>
      
          <br /><br />
      
        </div>
      </section>
      </>
  );
}

export default Cart;
