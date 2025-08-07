import React, { useState, useEffect } from 'react';

function Practice() {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  // State to hold the data after submission
  const [submittedData, setSubmittedData] = useState(null);
  // State for the success message
  const [successMessage, setSuccessMessage] = useState('');

  // EFFECT 1: Load form data from localStorage when component mounts
  useEffect(() => {
    try {
      const storedData = localStorage.getItem('formData');
      if (storedData) {
        setFormData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error("Failed to parse formData from localStorage", error);
    }
  }, []); // Empty dependency array means this runs only once on mount

  // EFFECT 2: Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]); // This effect runs whenever 'formData' changes

  const handleSubmit = () => {
    // 1. Save the current form data for display
    setSubmittedData(formData);
    // 2. Show a success message
    setSuccessMessage('Registration successful!');
    // 3. Clear the form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
    // 4. Hide the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <>
      FirstName: <input
        type="text"
        value={formData.firstName} // Controlled component
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
      />
      <br />
      LastName: <input
        type="text"
        value={formData.lastName} // Controlled component
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <br />
      Email: <input
        type="email"
        value={formData.email} // Controlled component
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <br />
      Password: <input
        type="password"
        value={formData.password} // Controlled component
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>

      {/* Display success message if it exists */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

      {/* Display submitted data if it exists */}
      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </>
  );
}

export default Practice;