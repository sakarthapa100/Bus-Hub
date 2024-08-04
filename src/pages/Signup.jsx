// import React from 'react';
// import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

// const Signup = () => {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-blue-50">
//       <div className="flex w-full max-w-6xl shadow-lg rounded-lg overflow-hidden">
//         <div className="w-1/2 bg-white p-8">
//           <h2 className="text-2xl font-bold mb-6 text-center">Create your account</h2>

//           <form>
//             <div className="mb-4">
//               <label className="block text-sm font-bold mb-2" htmlFor="firstName">
//                 Your Name
//               </label>
//               <div className="flex items-center border border-gray-300 rounded px-3 py-2">
//                 <FaUser className="mr-2 text-gray-400" />
//                 <input
//                   id="firstName"
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full outline-none"
//                 />
//               </div>
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-bold mb-2" htmlFor="lastName">
//                 Your Last Name
//               </label>
//               <div className="flex items-center border border-gray-300 rounded px-3 py-2">
//                 <FaUser className="mr-2 text-gray-400" />
//                 <input
//                   id="lastName"
//                   type="text"
//                   placeholder="Your Last Name"
//                   className="w-full outline-none"
//                 />
//               </div>
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-bold mb-2" htmlFor="mobile">
//                 Your Mobile
//               </label>
//               <div className="flex items-center border border-gray-300 rounded px-3 py-2">
//                 <FaEnvelope className="mr-2 text-gray-400" />
//                 <input
//                   id="mobile"
//                   type="tel"
//                   placeholder="Your Mobile"
//                   className="w-full outline-none"
//                 />
//               </div>
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-bold mb-2" htmlFor="password">
//                 Your Password
//               </label>
//               <div className="flex items-center border border-gray-300 rounded px-3 py-2">
//                 <FaLock className="mr-2 text-gray-400" />
//                 <input
//                   id="password"
//                   type="password"
//                   placeholder="Your Password"
//                   className="w-full outline-none"
//                 />
//               </div>
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-bold mb-2" htmlFor="confirmPassword">
//                 Confirm Password
//               </label>
//               <div className="flex items-center border border-gray-300 rounded px-3 py-2">
//                 <FaLock className="mr-2 text-gray-400" />
//                 <input
//                   id="confirmPassword"
//                   type="password"
//                   placeholder="Confirm Password"
//                   className="w-full outline-none"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
//             >
//               Register Now!
//             </button>
//           </form>

//           <div className="mt-4 text-center">
//             <p className="text-sm">Already have an account? <a href="/signin" className="text-blue-500">Sign In</a></p>
//           </div>
//         </div>

//         <div className="w-1/2 bg-blue-500 p-8 flex items-center justify-center">
//           <div className="text-white text-center">
//             <h2 className="text-3xl font-bold mb-4">Unlock your journey with BusSewa!</h2>
//             <p>Sign in to your account to access exclusive features, manage your bookings, and explore a world of seamless travel experiences.</p>
//             <img src="path_to_your_image.jpg" alt="Travel" className="mt-4 rounded-lg shadow-lg" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaUserCircle } from 'react-icons/fa';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    // ... (keep the existing validation logic)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Here you would typically send the form data to your backend
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-3xl shadow-2xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-8 border-r border-gray-200">
            <div className="text-center md:text-left">
              <FaUserCircle className="h-20 w-20 text-indigo-600 mx-auto md:mx-0" />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create your account</h2>
              <p className="mt-2 text-sm text-gray-600">
                Join us and start booking your bus tickets today!
              </p>
            </div>
            <div className="mt-8 space-y-6">
              <div className="flex items-center text-gray-700">
                <FaUser className="mr-2" /> Easy account management
              </div>
              <div className="flex items-center text-gray-700">
                <FaEnvelope className="mr-2" /> Email notifications for your bookings
              </div>
              <div className="flex items-center text-gray-700">
                <FaPhone className="mr-2" /> 24/7 customer support
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 md:pl-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <InputField
                icon={<FaUser />}
                name="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                error={errors.username}
              />
              <InputField
                icon={<FaUser />}
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
              />
              <InputField
                icon={<FaEnvelope />}
                name="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <InputField
                icon={<FaLock />}
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />
              <InputField
                icon={<FaLock />}
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
              />
              <InputField
                icon={<FaPhone />}
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ icon, name, type, placeholder, value, onChange, error }) => (
  <div>
    <div className="relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
        {icon}
      </div>
      <input
        name={name}
        type={type}
        required
        className={`appearance-none rounded-md relative block w-full pl-10 px-3 py-3 border ${
          error ? 'border-red-300' : 'border-gray-300'
        } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-150 ease-in-out`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default SignUp;
