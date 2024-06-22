import { useState } from "react";

export const useForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        position: '',
        yearsExperience: '',
        portfolioUrl: '',
        managementExperience: '',
        skills: [],
        interviewTime: null,
      });
      const [submitted,setSubmitted] = useState(false);
      const [errors, setErrors] = useState({});
    
      const handleChange = (event) => {
        const { name, value, type } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? (formData.skills.includes(value) ? formData.skills.filter((item) =>console.log(item)):[...formData.skills,value])  : value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log(formData)
           setSubmitted(true);
           
        }
      };
    
      const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName) {
          newErrors.fullName = 'Full Name is required';
        }
        if (!formData.email) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Invalid email format';
        }
        if (!formData.phoneNumber) {
          newErrors.phoneNumber = 'Phone Number is required';
        } else if (isNaN(formData.phoneNumber)) {
          newErrors.phoneNumber = 'Invalid phone number';
        }
        if (
          (formData.position === 'Developer' || formData.position === 'Designer') &&
          !formData.yearsExperience
        ) {
          newErrors.yearsExperience = 'Years of experience is required';
        } else if (formData.yearsExperience && parseInt(formData.yearsExperience, 10) <= 0) {
          newErrors.yearsExperience = 'Years of experience must be greater than 0';
        }
        if (formData.position === 'Designer' && !formData.portfolioUrl) {
          newErrors.portfolioUrl = 'Portfolio URL is required';
        } else if (formData.portfolioUrl && !/^(http|https):\/\/[^\s]+/.test(formData.portfolioUrl)) {
          newErrors.portfolioUrl = 'Invalid URL format';
        }
        if (formData.position === 'Manager' && !formData.managementExperience) {
          newErrors.managementExperience = 'Management experience is required';
        }
        if (formData.skills.length ===0) {
            console.log("ho gaya kaaam")
          newErrors.skills = 'At least one skill must be selected';
        }
        if (!formData.interviewTime) {
          newErrors.interviewTime = 'Preferred interview time is required';
        }
        return newErrors;
      };
    
  
    return {
      formData,
      errors,
      handleChange,
      handleSubmit,
      submitted
    };
  };