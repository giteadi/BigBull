import React from 'react';

const Cart = () => {
  return (
    <>     
      <section className="py-6 bg-gray-100">
        <div className="container">
      
          {/* =================== COMPONENT CART+SUMMARY ====================== */}
          <div className="flex flex-wrap">
            <div className="lg:w-3/4 w-full mb-6 lg:mb-0">
      
              <div className="card border-0">
                <div className="p-4">
                  <h4 className="card-title mb-20 text-5xl font-bold">Your Course</h4>
                  <article className="flex flex-wrap mb-4 ">
                    <div className="lg:w-5/12 w-full flex mb-4 lg:mb-0">
                      <figure className="flex me-lg-5">
                        <div className="flex-shrink-0">
                            <img src="https://media.licdn.com/dms/image/D4D22AQFd7AgxnSHIlw/feedshare-shrink_800/0/1684770730807?e=2147483647&v=beta&t=KmeV-afOm69UQLUm0u3UXl-l__2ImWX7Uz-DyuaqvJ8" className="w-24 h-24 object-cover rounded-md" alt="Item" />
                            </div>
                        <figcaption className="ml-4">
                          <a href="#" className="text-xl font-semibold">Winter jacket for men and lady</a>
                          <p className="text-gray-500"> Yellow, Jeans </p>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="lg:w-2/12 w-1/2">
                      <div className="price-wrap lh-sm"> 
                        <var className="price text-lg font-semibold">150 Rs</var>  <br />
                        </div>
                    </div>
                    <div className="flex">
                      <div className="space-x-2">
                        <a href="#" className="btn btn-light"><i className="fa fa-heart"></i></a> 
                        <a href="#" className="btn btn-light text-red-500">Remove</a>
                      </div>
                    </div>
                  </article>
                </div>
      
              </div>
            </div>
            <aside className="lg:w-1/4 w-full">
            <div className="card">
                <div className="card-body">
                  <dl className="dlist-align">
                    <dt>Total price:</dt>
                    <dd className="text-end">$329.00</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Discount:</dt>
                    <dd className="text-end text-green-500">- $60.00</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>TAX:</dt>
                    <dd className="text-end">$14.00</dd>
                  </dl>
                  <hr />
                  <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="text-end text-lg font-semibold">$357.90</dd>
                  </dl>
                  
                  <div className="my-3 space-y-2">
                    <a href="#" className="btn btn-success w-full">Make Purchase</a>
                    <a href="#" className="btn btn-light w-full">Back to shop</a>
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
