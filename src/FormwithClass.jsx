import React, { Component } from 'react';

// Main App component, now as a class, incorporating all registration fields
class App extends Component {
  // The constructor is called when the component is first created.
  // It's where you initialize state and bind methods.
  constructor(props) {
    super(props);

    // In class components, state is a single object.
    // We've added mobile, gender, and an errorMessage field.
    this.state = {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        gender: '',
        password: '',
      },
      submittedData: null,
      successMessage: '',
      errorMessage: '', // For displaying validation errors
    };

    // We need to bind `this` to our event handlers so they can access the component's state and props.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Handles changes in form inputs, including text fields and radio buttons.
   * It uses this.setState to update the component's state.
   * @param {object} e - The event object from the input field.
   */
  handleChange(e) {
    const { name, value } = e.target;
    // We use a callback in setState to make sure we're working with the latest state.
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
      // Clear previous error message on new input
      errorMessage: '',
    }));
  }

  /**
   * Handles the form submission, including validation.
   * @param {object} e - The form submission event object.
   */
  handleSubmit(e) {
    e.preventDefault(); // Prevent the browser from reloading the page

    const { firstName, lastName, email, mobile, gender, password } = this.state.formData;

    // --- Validation Logic ---
    if (!firstName) {
      this.setState({ errorMessage: "First Name is required" });
      return;
    }
    if (!lastName) {
      this.setState({ errorMessage: "Last Name is required" });
      return;
    }
    if (!email) {
      this.setState({ errorMessage: "Email is required" });
      return;
    }
    if (!mobile) {
      this.setState({ errorMessage: "Mobile No. is required" });
      return;
    }
    if (!gender) {
        this.setState({ errorMessage: "Please select a gender" });
        return;
    }
    if (!password) {
      this.setState({ errorMessage: "Password is required" });
      return;
    }
    
    // --- If Validation Passes ---

    // Clear any existing error messages
    this.setState({ errorMessage: '' });

    // Update the state with submitted data and a success message
    this.setState({
      submittedData: this.state.formData,
      successMessage: 'Registration successful! Welcome aboard.',
    });
    
    // Reset the form fields after submission
    this.setState({
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        gender: '',
        password: '',
      }
    });

    // Hide the success message after 3 seconds
    this.timeoutId = setTimeout(() => {
        this.setState({ successMessage: '' });
    }, 3000);
  }

  // This lifecycle method is called when the component is about to be removed from the DOM.
  // It's a good place to clean up things like timers.
  componentWillUnmount() {
      if (this.timeoutId) {
          clearTimeout(this.timeoutId);
      }
  }

  // The render method is required for all class components.
  // It returns the JSX that will be displayed on the screen.
  render() {
    // We can destructure state for easier access in the JSX
    const { formData, submittedData, successMessage, errorMessage } = this.state;

    return (
      <div className="bg-slate-900 min-h-screen flex items-center justify-center font-sans p-4">
        <div className="w-full max-w-lg bg-slate-800 p-8 md:p-10 rounded-2xl shadow-2xl border border-slate-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create Your Account</h1>
            <p className="text-slate-400">Join our community and start your journey.</p>
          </div>
          
          {/* The Registration Form */}
          <form onSubmit={this.handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
              {/* First Name Input */}
              <div className="w-full">
                <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="bg-slate-700 border border-slate-600 text-white rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="e.g., John"
                  value={formData.firstName}
                  onChange={this.handleChange}
                />
              </div>
              
              {/* Last Name Input */}
              <div className="w-full">
                <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="bg-slate-700 border border-slate-600 text-white rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="e.g., Doe"
                  value={formData.lastName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="bg-slate-700 border border-slate-600 text-white rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={this.handleChange}
              />
            </div>

            {/* Mobile Number Input */}
            <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="mobile">
                    Mobile No.
                </label>
                <input
                    className="bg-slate-700 border border-slate-600 text-white rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                    id="mobile"
                    type="tel"
                    name="mobile"
                    placeholder="e.g., 9876543210"
                    value={formData.mobile}
                    onChange={this.handleChange}
                />
            </div>
            
            {/* Gender Selection */}
            <div>
                <label className="block text-slate-300 text-sm font-semibold mb-2">Gender</label>
                <div className="flex items-center space-x-6">
                    <label className="flex items-center text-slate-300 cursor-pointer">
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={formData.gender === 'Male'}
                            onChange={this.handleChange}
                            className="w-4 h-4 text-indigo-600 bg-slate-700 border-slate-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2">Male</span>
                    </label>
                    <label className="flex items-center text-slate-300 cursor-pointer">
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={formData.gender === 'Female'}
                            onChange={this.handleChange}
                            className="w-4 h-4 text-indigo-600 bg-slate-700 border-slate-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2">Female</span>
                    </label>
                </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="bg-slate-700 border border-slate-600 text-white rounded-lg w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={this.handleChange}
              />
            </div>
            
            {/* Submit Button */}
            <div>
              <button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105 duration-300"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>

          {/* Display Error Message */}
          {errorMessage && (
            <div className="mt-6 p-4 bg-red-500/20 border border-red-500 text-red-300 rounded-lg text-center transition-opacity duration-500">
              {errorMessage}
            </div>
          )}

          {/* Display Success Message */}
          {successMessage && (
            <div className="mt-6 p-4 bg-green-500/20 border border-green-500 text-green-300 rounded-lg text-center transition-opacity duration-500">
              {successMessage}
            </div>
          )}

          {/* Display Submitted Data */}
          {submittedData && (
            <div className="mt-8 p-6 bg-slate-700/50 rounded-lg border border-slate-600">
              <h3 className="text-lg font-semibold text-white mb-4 border-b border-slate-600 pb-2">Account Created:</h3>
              <div className="text-slate-300 space-y-2">
                <p><strong>First Name:</strong> {submittedData.firstName}</p>
                <p><strong>Last Name:</strong> {submittedData.lastName}</p>
                <p><strong>Email:</strong> {submittedData.email}</p>
                <p><strong>Mobile:</strong> {submittedData.mobile}</p>
                <p><strong>Gender:</strong> {submittedData.gender}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
