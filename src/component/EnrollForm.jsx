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
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        password: '',
        cpassword: '',
        country: '',
        state: '',
        city: '',
        address: '',
        dob: '',
        profilePicture: null,
    });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const response = await fetch('http://localhost:6060/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log('Form submitted successfully:', data);
    
            // Redirect or show a success message
            navigate('/login');
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error (e.g., display an error message to the user)
        }
    };

    return (
        <>
            <div className="max-w-screen-xl pt-10 m-auto">
                <div className="mb-5">
                    <h1 className="text-4xl font-bold text-center">Enrollment Form</h1>
                </div>
                <div>
                <form className="px-20 pb-5 border-1 rounded-2xl" onSubmit={handleSubmit}>
            <div className="flex justify-around my-10">
                <div className="w-full max-w-lg">
                    <label htmlFor="name" className="mb-2 text-xl font-semibold">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Your Name" 
                        className="w-full px-4 py-3 border-2 rounded-xl" 
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
                        className="w-full px-4 py-3 border-2 rounded-xl" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
            </div>
            <div className="flex justify-around my-10">
                <div className="w-full max-w-lg">
                    <label htmlFor="phone" className="mb-2 text-xl font-semibold">Enter phone Number</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="Your phone Number" 
                        className="w-full px-4 py-3 border-2 rounded-xl" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="w-full max-w-lg">
                    <label htmlFor="gender" className="mb-2 text-xl font-semibold">Gender</label>
                    <select 
                        id="gender" 
                        name="gender" 
                        className="w-full px-4 py-3 border-2 rounded-xl" 
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
                        className="w-full px-4 py-3 border-2 rounded-xl" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                    </div>
                    <div className="flex justify-end">
                        <span className="relative -mt-10 pe-3" onClick={() => togglePasswordVisibility('password')}>
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
                        name="cpassword" 
                        placeholder="Confirm Password" 
                        className="w-full px-4 py-3 border-2 rounded-xl" 
                        value={formData.cpassword} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="flex justify-end">
                    <span className="relative -mt-10 pe-3" onClick={() => togglePasswordVisibility('confirmPassword')}>
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
                        className="w-full px-4 py-3 border-2 rounded-xl" 
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
                        className="w-full px-4 py-3 border-2 rounded-xl" 
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
                        className="w-full px-4 py-3 border-2 rounded-xl" 
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
                        className="w-full px-4 py-3 border-2 rounded-xl" 
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
                        className="w-full px-4 py-3 border-2 rounded-xl" 
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
                        className="w-full px-4 py-3 border-2 rounded-xl" 
                        onChange={handleChange} 
                    />
                </div>
            </div>
            <div className="flex justify-center my-10">
                <button type="submit" className="px-6 py-2 text-xl font-semibold text-white bg-rose-600 rounded-xl" onSubmit={handleSubmit}>Submit</button>
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