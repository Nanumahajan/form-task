Controlled React Form
This is a simple controlled form built using React. It allows users to submit their username, email, password, and confirm password. The form includes validation for each field, and it displays error messages when the input data doesn't meet the required criteria.

Features
Controlled form: The form fields are controlled components, which means their values are managed by React state.

Form validation: The form includes client-side validation for the following fields:

Username: Required, minimum length of 3 characters.
Email: Required and must be in a valid email format.
Password: Required, minimum length of 6 characters.
Confirm Password: Must match the password.
Submission handling: When the form is submitted without validation errors, the data is logged to the console, and a pretty-printed JSON representation of the data is displayed on the page.

Technologies Used
React: The front-end framework for building the user interface.
useState: React hook used to manage the form data, errors, and submitted data.
CSS: Styling for the form components is done using CSS.
JavaScript: Used for form validation and event handling.


Uncontrolled React Form
This is an uncontrolled form implemented in React. Unlike controlled forms, uncontrolled forms do not rely on React state to manage form input values. Instead, it directly accesses the DOM elements using refs for form input values.

Features
Uncontrolled form: The form fields in this implementation are uncontrolled components, meaning their values are managed directly through DOM refs.

Form validation: The form includes client-side validation for the following fields:

Username: Required, must be at least 3 characters long, and not more than 20 characters.
Email: Required and must be in a valid email format.
Password: Required and must be at least 6 characters long.
Confirm Password: Must match the password.
Submission handling: When the form is submitted without validation errors, the data is displayed as a pretty-printed JSON object, and the form fields are cleared.

Technologies Used
React: The front-end framework for building the user interface.
useRef: React hook used to create refs for accessing DOM elements.
CSS: Styling for the form components is done using CSS.
JavaScript: Used for form validation and event handling.

Author: Ritesh