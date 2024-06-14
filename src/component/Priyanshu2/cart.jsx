import styled from 'styled-components';
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import course from '../../Assets/js.png';
import rating from '../../Assets/star.png';

const courseFeature = [
    'https://images.pexels.com/photos/2781195/pexels-photo-2781195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const Cart = () => {
    return (
        <>
            <LandingPage>
                <div className="main-container flex">
                    <div className="box-1 detail-box head w-[65%]">

                        {/* line-1 */}

                        <div className='line-1 flex justify-between p-16 h-10 flex-wrap'>
                            <h1 className='heading text-3xl font-semibold'>Shopping Cart</h1>
                            <p className='delivery-option'><a href="">Delivery option</a></p>
                        </div>
                        <div className='mx-3 hr-1'>
                            <hr className='half-line' />
                        </div>

                        {/* line-2 */}

                        <div className='line-2 px-20 flex justify-between p-10 h-10'>
                            <p className='items font-semibold'>Item</p>
                            <p className='prices font-semibold'>Total price</p>
                        </div>
                        <div className='mx-3 hr-2'>
                            <hr className='half-line' />
                        </div>


                        {/* duplicate-1 */}


                        <div className="line-3a course flex h-52 py-10 px-10 border-box">
                            <div className="course-features flex text-xs">
                                <div className="course-img w-[50%] mr-5">
                                    <img src={course} alt="" />
                                </div>
                                <div className="course-details">
                                    <p>50 Projects In 50 Days - HTML, CSS & JavaScript</p>
                                    <p className='font-semibold pb-2'>- by Angela Youth</p>
                                    <p className='pb-2'>19 total hours +142 lectures +Beginner</p>
                                    <p className='pb-2'> (11,634 ratings) </p>
                                    <div className='flex pb-2'>
                                        <p className='rate pr-2'>4.5</p>
                                        <img src={rating} alt="rate-image" className='rating-image w-[10%]' />
                                    </div>
                                </div>
                            </div>

                            {/* remove and later */}

                            <div className="remove-later text-xs">
                                <div className='pl-9'>
                                    <p className='pb-20 font-semibold'>899/-</p>
                                </div>
                                <div className="option flex mr-9">
                                    <p><a href="#" className='pr-5 underline hover:no-underline'>Remove </a></p>
                                    <p><a href="#" className='underline hover:no-underline'>Save for later</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='mx-3 hr-3'>
                            <hr className='half-line' />
                        </div>

                        {/* duplicate-2 */}

                        <div className="line-3a course flex h-52 py-10 px-10 border-box">
                            <div className="course-features flex text-xs">
                                <div className="course-img w-[50%] mr-5">
                                    <img src={course} alt="" />
                                </div>
                                <div className="course-details">
                                    <p>50 Projects In 50 Days - HTML, CSS & JavaScript</p>
                                    <p className='font-semibold pb-2'>- by Angela Youth</p>
                                    <p className='pb-2'>19 total hours +142 lectures +Beginner</p>
                                    <p className='pb-2'> (11,634 ratings) </p>
                                    <div className='flex pb-2'>
                                        <p className='rate pr-2'>4.5</p>
                                        <img src={rating} alt="rate-image" className='rating-image w-[10%]' />
                                    </div>
                                </div>
                            </div>

                            {/* remove and later */}

                            <div className="remove-later text-xs">
                                <div className='pl-9'>
                                    <p className='pb-20 font-semibold'>999/-</p>
                                </div>
                                <div className="option flex mr-9">
                                    <p><a href="#" className='pr-5 underline hover:no-underline'>Remove </a></p>
                                    <p><a href="#" className='underline hover:no-underline'>Save for later</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='mx-3'>
                            <hr className='half-line' />
                        </div>

                        {/* duplicate-3 */}

                        <div className="line-3a course flex h-52 py-10 px-10 border-box">
                            <div className="course-features flex text-xs">
                                <div className="course-img w-[50%] mr-5">
                                    <img src={course} alt="" />
                                </div>
                                <div className="course-details">
                                    <p>50 Projects In 50 Days - HTML, CSS & JavaScript</p>
                                    <p className='font-semibold pb-2'>- by Angela Youth</p>
                                    <p className='pb-2'>19 total hours +142 lectures +Beginner</p>
                                    <p className='pb-2'> (11,634 ratings) </p>
                                    <div className='flex pb-2'>
                                        <p className='rate pr-2'>4.5</p>
                                        <img src={rating} alt="rate-image" className='rating-image w-[10%]' />
                                    </div>
                                </div>
                            </div>
                            {/* remove and later */}

                            <div className="remove-later text-xs">
                                <div className='pl-9'>
                                    <p className='pb-20 font-semibold'>999/-</p>
                                </div>
                                <div className="option flex mr-9">
                                    <p><a href="#" className='pr-5 underline hover:no-underline'>Remove </a></p>
                                    <p><a href="#" className='underline hover:no-underline'>Save for later</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='mx-3'>
                            <hr className='half-line' />
                        </div>
                        {/* duplicate-4 */}

                        <div className="line-3a course flex h-52 py-10 px-10 border-box">
                            <div className="course-features flex text-xs">
                                <div className="course-img w-[50%] mr-5">
                                    <img src={course} alt="" />
                                </div>
                                <div className="course-details">
                                    <p>50 Projects In 50 Days - HTML, CSS & JavaScript</p>
                                    <p className='font-semibold pb-2'>- by Angela Youth</p>
                                    <p className='pb-2'>19 total hours +142 lectures +Beginner</p>
                                    <p className='pb-2'> (11,634 ratings) </p>
                                    <div className='flex pb-2'>
                                        <p className='rate pr-2'>4.5</p>
                                        <img src={rating} alt="rate-image" className='rating-image w-[10%]' />
                                    </div>
                                </div>
                            </div>
                            {/* remove and later */}

                            <div className="remove-later text-xs">
                                <div className='pl-9'>
                                    <p className='pb-20 font-semibold'>999/-</p>
                                </div>
                                <div className="option flex mr-9">
                                    <p><a href="#" className='pr-5 underline hover:no-underline'>Remove </a></p>
                                    <p><a href="#" className='underline hover:no-underline'>Save for later</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='mx-3'>
                            <hr className='half-line' />
                        </div>

                        {/* duplicate-5 */}

                        <div className="line-3a course flex h-52 py-10 px-10 border-box">
                            <div className="course-features flex text-xs">
                                <div className="course-img w-[50%] mr-5">
                                    <img src={course} alt="" />
                                </div>
                                <div className="course-details">
                                    <p>50 Projects In 50 Days - HTML, CSS & JavaScript</p>
                                    <p className='font-semibold pb-2'>- by Angela Youth</p>
                                    <p className='pb-2'>19 total hours +142 lectures +Beginner</p>
                                    <p className='pb-2'> (11,634 ratings) </p>
                                    <div className='flex pb-2'>
                                        <p className='rate pr-2'>4.5</p>
                                        <img src={rating} alt="rate-image" className='rating-image w-[10%]' />
                                    </div>
                                </div>
                            </div>

                            {/* remove and later */}

                            <div className="remove-later text-xs">
                                <div className='pl-9'>
                                    <p className='pb-20 font-semibold'>999/-</p>
                                </div>
                                <div className="option flex mr-9">
                                    <p><a href="#" className='pr-5 underline hover:no-underline'>Remove </a></p>
                                    <p><a href="#" className='underline hover:no-underline'>Save for later</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='mx-4'>
                            <hr className='half-line' />
                        </div>
                    </div>
                    <div className="box-2 payment-box pl-5 ml-10 pt-16 w-[30%] xl:w-[35%]">
                        <div className='summary pb-10'>
                            <h2 className='font-semibold text-base text-slate-900'>Order Summary</h2>
                        </div>
                        <div className="summary-head-box border border-slate-400 w-[80%] h-[48%] pt-6 box-content p-4 text-black rounded ">
                            <div className="inner-box text-xs text-black">
                                <div className="summary-box flex justify-between leading-6">
                                    <div>
                                        <ul>
                                            <li>Subtotal</li>
                                            <li>Shipping</li>
                                            <li>Estimated Tax</li>
                                            <li><b>Total</b></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>11000/-</li>
                                            <li>Free</li>
                                            <li>45.06</li>
                                            <li><b>11056/-</b></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-buttons grid grid-col-12 gap-2 pt-14">

                                <button className='checkout-btn bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4'>Proceed to Checkout</button>
                                <button className='paypal-btn bg-white border border-slate-800 hover:bg-blue-700 text-black font-bold py-2 px-14 rounded'>Pay pal</button>

                            </div>
                            <div className="coupan">
                                <input type="text" name='' className='coupon-box border border-slate-800 w-[80%] lg:w-[69%] p-2 mt-4 md:w-[68%]' placeholder='Enter Coupon' /><button className='apply-btn'><p className='apply-text pl-2 bg-blue-500 p-2 px-5 border border-dark'>Apply</p></button>
                            </div>
                        </div>
                    </div>
                    <div className="box-3 hidden-payment flex p-3 text-center hidden">
                        <h5 className='total pr-2 text-slate-500 font-semibold pt-2'>Total:</h5>
                        <h1 className='rupees font-semibold text-3xl'>998/-</h1>
                        <p className='off pl-3 pt-2 text-slate-450'>84% off</p>
                    </div>
                </div>


            </LandingPage >
        </>
    )
}



export default Cart;
const LandingPage = styled.div`


.half-line {
    width: 100%;
    border: 0;
    border-top: 2px solid #000; 
}



 /* media queries (cart page) - */


 @media screen and (min-width: 1200px){

     .box-2 {
         position: fixed;
         top: 0;
         right: 0;
         background-color: white;
     }

     .coupon-box {
         font-size: 12px;
         width: 274px;
         
     } 
     
     .apply-text{
     padding: 5px 12px 9px;
     }
 }



 @media screen and (min-width: 1024px) and (max-width: 1200px){
     
     .coupon-box {
         font-size: 12px;
         width: 245px;
         
        } 
        
        .apply-text{
            padding: 4px 12px 7px;
        }
    }


@media screen and (min-width: 768px) and (max-width: 1020px){


.line-3a {
display: flex;
flex-direction: column;
padding-top: 20px;
color: red;
}

.remove-later {
display: flex;
justify-content: space-between;
padding-top: 25px;
}

.payment-box {
padding-top: 20px;
width: 40%;
}

.box-2 {
     position: fixed;
     top: 0;
     right: 0;
     background-color: white;
 }


.summary-head-box {
color: white;
}

.prices {
display: none;
}

.line-2 {
display: flex;
justify-content: center;
font-size: 18px;
}

}


 
@media screen and (min-width: 480px) and (max-width: 767px){

    
.line-3a {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
}

.remove-later {
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
}

.payment-box {
    padding-top: 10px;
    width: 40%;
}

.box-2 {
    position: fixed;
    top: 0;
    right: 0;
    background-color: white;
    width: 250px;
}

.paypal-btn, .apply-btn, .checkout-btn {
   font-size: 12px;
}

.coupon-box {
    font-size: 12px;
    width: 123px;

}

} 

@media screen and (min-width: 320px) and (max-width: 480px){

    
    .heading {
        font-size: 22px;
}

.main-container {
    display: flex;
    flex-direction: column-reverse;
    margin: auto;
}

.box-1 {
    margin: auto;
    width: 100%;
}

.box-2 {
    margin: auto;
    width: 100%;
}

.line-1 {
    display: flex;
    justify-content: space-between;
    padding: 50px;
}

.line-3a {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
}

.remove-later {
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
    
}

.items, .prices {
    font-size: 12px;
}

.course-img {
    width: 200px;
}

.paypal-btn, .coupon-box, .apply-btn{
    display: none;
}

.payment-buttons {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 10px;
    text-align: center;

}

.checkout-btn {
    background-color: #28a745;
    color: white;
    padding: 15px 30px;
    font-size: 16px;
    border-radius: 5px;
}

.line-1 {
    display: none;
}

.line-2 {
    display: flex;
    justify-content: center;
   

}

.hidden-payment {
    display: inline-flex;
}

.payment-box {
    padding-top: 10px;
}

.hr-1 {
    display: none;
}

.prices {
    display: none;
}




}
`;