  import './App.css';
  import React from 'react';
  import StudentForm from './StudentForm.js'; 

  const App = () => {
    const handleFormSubmit = (values) => {
      // Handle form submission (e.g., save to state or send to backend)
      console.log('Form values:', values);
    };

    return (
      <div>
        <h1>StudentApp1</h1>
        <StudentForm onFormSubmit={handleFormSubmit} />
      </div>
    );
  };

  export default App;
