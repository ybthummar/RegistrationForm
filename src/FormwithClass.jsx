import React, { Component } from 'react';

// Main App component, now as a class
class App extends Component {
  // The constructor is called when the component is first created.
  // It's where you initialize state and bind methods.
  constructor(props) {
    super(props);

    // In class components, state is a single object.
    // This replaces multiple useState hooks.
    this.state = {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      submittedData: null,
      successMessage: '',
    };

    // We need to bind `this` to our event handlers so they can access the component's state and props.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Handles changes in form inputs.
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
      }
    }));
  }

  /**
   * Handles the form submission.
   * @param {object} e - The form submission event object.
   */
  handleSubmit(e) {
    e.preventDefault(); // Prevent the browser from reloading the page

    // Update the state with submitted data and a success message
    this.setState({
      submittedData: this.state.formData,
      successMessage: 'Registration successful!',
    });
    
    // Reset the form fields after submission
    this.setState({
      formData: {
        firstName: '',
        lastName: '',
        email: '',
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
    const { formData, submittedData, successMessage } = this.state;

    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center font-sans">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Create Account (Class)</h1>
          <p className="text-center text-gray-500 mb-6">Get started with your free account</p>
          
          {/* The Registration Form */}
          <form onSubmit={this.handleSubmit}>
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
}

export default App;
