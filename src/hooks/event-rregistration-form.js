import { useState } from "react";

export const useForm = () => {
    const [values, setValues] = useState({
      name: '',
      email: '',
      age: '',
      attendingWithGuest: false,
      guestName: '',
    });
  
    const [errors, setErrors] = useState({
      name: '',
      email: '',
      age: '',
      guestName: '',
    });
    const [submitted,setSubmitted] = useState(false);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };
  
    const handleGuestChange = (event) => {
      console.log(event.target.value);
      const attendingWithGuest = event.target.value === 'Yes';
      setValues((prevValues) => ({ ...prevValues, attendingWithGuest }));
    };
  
    const validateForm = () => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Name is required';
      }
      if (!values.email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
        errors.email = 'Email is required and must be a valid email format';
      }
      if (!values.age || values.age <= 0) {
        errors.age = 'Age is required and must be a number greater than 0';
      }
      if (values.attendingWithGuest && !values.guestName) {
        errors.guestName = 'Guest name is required';
      }
      setErrors(errors);
      return (Object.keys(errors).length === 0);
    };
  
    // useEffect(() => {
    //   validateForm();
    // }, [values]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (validateForm()) {
        console.log('Form submitted:', values);
        // Display summary of entered data
        setSubmitted(true);
      }
    };
  
    return {
      values,
      errors,
      handleInputChange,
      handleGuestChange,
      handleSubmit,
      submitted
    };
  };