# React Registration Form: Hooks vs. Class Components

This project demonstrates how to build a simple registration form in React using two different approaches:
1.  **Functional Component with Hooks (`useState`)**
2.  **Class Component (`this.state`, `setState`)**

It serves as a clear, side-by-side comparison of modern React (Hooks) and the traditional class-based approach for managing state and handling events in a form.

---

## Features

-   **Clean & Modern UI:** Styled with Tailwind CSS for a professional look and feel.
-   **State Management:** Demonstrates state handling for form inputs.
-   **Event Handling:** Shows how to handle input changes and form submission.
-   **User Feedback:** Displays a success message upon submission and clears the form.
-   **Data Display:** Shows the submitted data on the same page after registration.
-   **Component-Based:** The project is structured with reusable React components.

---

## Technologies Used

-   [**React**](https://reactjs.org/) - A JavaScript library for building user interfaces.
-   [**Vite**](https://vitejs.dev/) - A modern front-end build tool.
-   [**Tailwind CSS**](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and `npm` (or `yarn`) installed on your computer.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd your-repository-name
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

### Running the Application

To start the development server, run the following command:

```bash
npm run dev
```

This will start the application, and you can view it in your browser at `http://localhost:5173` (the port may vary).

---

## Switching Between Components

This project contains two different implementations of the same form. You can easily switch between the functional component (`FormwithHooks`) and the class component (`FormwithClass`).

1.  Open the `src/main.jsx` file.
2.  To view the **functional component with Hooks**, make sure the file looks like this:

    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import FormwithHooks from './FormwithHooks.jsx'; // Import the Hooks component
    import './index.css';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <FormwithHooks /> {/* Render the Hooks component */}
      </React.StrictMode>,
    );
    ```

3.  To view the **class component**, change the import and the rendered component:

    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import FormwithClass from './FormwithClass.jsx'; // Import the Class component
    import './index.css';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <FormwithClass /> {/* Render the Class component */}
      </React.StrictMode>,
    );
    ```

4.  Save the `main.jsx` file, and the development server will automatically reload the browser to show the selected component.
