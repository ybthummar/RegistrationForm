import React, { useState } from 'react';

// Main App component
function App() {
  // State to hold the form input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  // State to hold the submitted data to display it
  const [submittedData, setSubmittedData] = useState(null);
  
  // State for a success message
  const [successMessage, setSuccessMessage] = useState('');

  /**
   * Handles changes in form inputs.
   * It uses the input's `name` attribute to update the corresponding
   * piece of state in the `formData` object.
   * @param {object} e - The event object from the input field.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  /**
   * Handles the form submission.
   * Prevents the default form action, sets the submitted data for display,
   * shows a success message, and resets the form fields.
   * @param {object} e - The form submission event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the browser from reloading the page
    setSubmittedData(formData); // Store the submitted data
    setSuccessMessage('Registration successful!'); // Set the success message
    
    // Reset the form fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });

    // Hide the success message after 3 seconds
    setTimeout(() => {
        setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center font-sans">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Create Account</h1>
        <p className="text-center text-gray-500 mb-6">Get started with your free account</p>
        
        {/* The Registration Form */}
        <form onSubmit={handleSubmit}>
          {/* First Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="firstName"
              type="text"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          
          {/* Last Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline transition duration-300"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>

        {/* Display Success Message */}
        {successMessage && (
            <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                {successMessage}
            </div>
        )}

        {/* Display Submitted Data */}
        {submittedData && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Submitted Information:</h3>
            <div className="text-gray-700 space-y-2">
              <p><strong>First Name:</strong> {submittedData.firstName}</p>
              <p><strong>Last Name:</strong> {submittedData.lastName}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
