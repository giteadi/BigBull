import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const countryToStatesMap = {
    India: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
    ],
    Australia: [
      "New South Wales",
      "Queensland",
      "Victoria",
      "Western Australia",
    ],
    UAE: ["Abu Dhabi", "Dubai", "Sharjah", "Ajman"],
    USA: ["California", "New York", "Texas", "Florida"],
    Canada: ["Ontario", "Quebec", "British Columbia", "Alberta"],
    UK: ["England", "Scotland", "Wales", "Northern Ireland"],
    Germany: ["Berlin", "Bavaria", "Hamburg", "North Rhine-Westphalia"],
    Japan: ["Tokyo", "Osaka", "Hokkaido", "Kyoto"],
    Brazil: ["Sao Paulo", "Rio de Janeiro", "Minas Gerais", "Bahia"],
    China: ["Beijing", "Shanghai", "Guangdong", "Zhejiang"],
    SouthAfrica: ["Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape"],
    // Add more countries and states as needed
  };

const MyEnroll = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        gender: '',
        password: '',
        confirmPassword: '',
        country: '',
        state: '',
        city: '',
        address: '',
        dob: '',
        profilePicture: null,
    });
    const navigate = useNavigate();

    const allCountries = Object.keys(countryToStatesMap);

    const togglePasswordVisibility = (pass) => {
        setShowPassword({...showPassword, [pass]: !showPassword[pass]});
      };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // yaha par passord and confirm passowrd
        // navigate('/login');
        console.log(formData);
    };
    return (
        <>
            <div className="max-w-screen-xl	m-auto pt-10">
                <div className="mb-5">
                    <h1 className="text-4xl font-bold text-center">Enrollment Form</h1>
                </div>
                <div>
                <form className="px-20 border-1 rounded-2xl pb-5" onSubmit={handleSubmit}>
            <div className="flex justify-around my-10">
                <div className="w-full max-w-lg">
                    <label htmlFor="name" className="mb-2 text-xl font-semibold">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Your Name" 
                        className="w-full border-2 py-3 px-4 rounded-xl" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="w-full max-w-lg">
                    <label htmlFor="email" className="mb-2 text-xl font-semibold">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Your Email" 
                        className="w-full border-2 py-3 px-4 rounded-xl" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
            </div>
            <div className="flex justify-around my-10">
                <div className="w-full max-w-lg">
                    <label htmlFor="mobile" className="mb-2 text-xl font-semibold">Enter Mobile Number</label>
                    <input 
                        type="tel" 
                        id="mobile" 
                        name="mobile" 
                        placeholder="Your Mobile Number" 
                        className="w-full border-2 py-3 px-4 rounded-xl" 
                        value={formData.mobile} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="w-full max-w-lg">
                    <label htmlFor="gender" className="mb-2 text-xl font-semibold">Gender</label>
                    <select 
                        id="gender" 
                        name="gender" 
                        className="w-full border-2 py-3 px-4 rounded-xl" 
                        value={formData.gender} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="" disabled>Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-around my-10">
                <div className="w-full max-w-lg">
                    <div>
                    <label htmlFor="password" className="mb-2 text-xl font-semibold">Create Password</label>
                    <input 
                        type={showPassword.password ? "text" :"password"}
                        id="password" 
                        name="password" 
                        placeholder="Create Password" 
                        className="w-full border-2 py-3 px-4 rounded-xl" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                    </div>
                    <div className="flex justify-end">
                        <span className=" relative -mt-10 pe-3" onClick={() => togglePasswordVisibility('password')}>
                            {!showPassword.password ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
                        </span>
                    </div>
                </div>
                <div className="w-full max-w-lg">
                    <div>
                    <label htmlFor="confirmPassword" className="mb-2 text-xl font-semibold">Confirm Password</label>
                    <input 
                        type={showPassword.confirmPassword ? "text" :"password"}
                        id="confirmPassword" 
                        name="confirmPassword" 
                        placeholder="Confirm Password" 
                        className="w-full border-2 py-3 px-4 rounded-xl" 
                        value={formData.confirmPassword} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="flex justify-end">
                    <span className=" relative -mt-10 pe-3" onClick={() => togglePasswordVisibility('confirmPassword')}>
                        {!showPassword.confirmPassword ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
                    </span>
                    </div>
                </div>
            </div>
            <div className="flex justify-around my-10">
                <div className="w-full max-w-lg">
                    <label htmlFor="country" className="mb-2 text-xl font-semibold">Choose your Country from list</label>
                    <select 
                        id="country" 
                        name="country" 
                        className="w-full border-2 py-3 px-4 rounded-xl" 
                        value={formData.country} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="" disabled>Select your country</option>
                         {allCountries.map((country) => (
                              <option key={country} value={country}>
                                {country}
                              </option>
                            ))}
                    </select>
                </div>
                <div className="w-full max-w-lg">
                    <label htmlFor="state" className="mb-2 text-xl font-semibold">Choose your State from list</label>
                    <select 
                        id="state" 
                        name="state" 
                        className="w-full border-2 py-3 px-4 rounded-xl" 
                        value={formData.state} 
                        onChange={handleChange} 
                        disabled={!formData.country}
                        required
                    >
                        <option value="" disabled>Select your state</option>
                        {formData.country &&
                              countryToStatesMap[formData.country].map((state) => (
                                <option key={state} value={state}>
                                  {state}
                                </option>
                              ))}
                    </select>
                </div>
            </div>
            <div className="flex justify-around my-10">
                <div className="w-full max-w-lg">
                    <label htmlFor="city" className="mb-2 text-xl font-semibold">Enter City</label>
                    <input 
                        type="text" 
                        id="city" 
                        name="city" 
                        placeholder="Your City" 
                        className="w-full border-2 py-3 px-4 rounded-xl" 
                        value={formData.city} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="w-full max-w-lg">
                    <label htmlFor="address" className="mb-2 text-xl font-semibold">Enter Address</label>
                    <input 
                        type="text" 
                        id="address" 
                        name="address" 
                        placeholder="Your Address" 
                        className="w-full border-2 py-3 px-4 rounded-xl" 
                        value={formData.address} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
            </div>
            <div className="flex justify-around my-10">
                <div className="w-full max-w-lg">
                    <label htmlFor="dob" className="mb-2 text-xl font-semibold">Enter Date Of Birth</label>
                    <input 
                        type="date" 
                        id="dob" 
                        name="dob" 
                        className="w-full border-2 py-3 px-4 rounded-xl" 
                        value={formData.dob} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="w-full max-w-lg">
                    <label htmlFor="profilePicture" className="mb-2 text-xl font-semibold">Upload Profile Picture</label>
                    <input 
                        type="file" 
                        id="profilePicture" 
                        name="profilePicture" 
                        className="w-full border-2 py-3 px-4 rounded-xl" 
                        onChange={handleChange} 
                    />
                </div>
            </div>
            <div className="flex justify-center my-10">
                <button type="submit" className="bg-rose-600 text-white py-2 px-6 rounded-xl text-xl font-semibold">Submit</button>
            </div>
            <div className="flex justify-center text-xl">
                <p className="px-2">Already Have an Accound </p> <Link className="text-blue-600 hover:underline" to={'/login'}>Login</Link>
            </div>
        </form>
                </div>
            </div>
        </>
    )
}
export default MyEnroll;