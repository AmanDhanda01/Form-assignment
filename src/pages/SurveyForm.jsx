import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function SurveyForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    technologySection: {
      favoriteProgrammingLanguage: '',
      yearsOfExperience: '',
    },
    healthSection: {
      exerciseFrequency: '',
      dietPreference: '',
    },
    educationSection: {
      highestEducationLevel: '',
      fieldOfStudy: '',
    },
    feedback: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    technologySection: {
      favoriteProgrammingLanguage: '',
      yearsOfExperience: '',
    },
    healthSection: {
      exerciseFrequency: '',
      dietPreference: '',
    },
    educationSection: {
      highestQualification: '',
      fieldOfStudy: '',
    },
    feedback: '',
  });

  const [submitted, setSubmitted] = useState(false);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Submit form data to server
      setSubmitted(true);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName) {
      errors.fullName = 'Required';
    }
    if (!formData.email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      errors.email = 'Required and must be a valid email format';
    }
    if (!formData.surveyTopic) {
      errors.surveyTopic = 'Required';
    }
    if (formData.surveyTopic === 'Technology') {
      if (!formData.technologySection.favoriteProgrammingLanguage) {
        errors.technologySection.favoriteProgrammingLanguage = 'Required';
      }
      if (!formData.technologySection.yearsOfExperience) {
        errors.technologySection.yearsOfExperience = 'Required';
      }
    }
    if (formData.surveyTopic === 'Health') {
      if (!formData.healthSection.exerciseFrequency) {
        errors.healthSection.exerciseFrequency = 'Required';
      }
      if (!formData.healthSection.dietPreference) {
        errors.healthSection.dietPreference = 'Required';
      }
    }
    if (formData.surveyTopic === 'Education') {
      if (!formData.educationSection.highestQualification) {
        errors.educationSection.highestQualification = 'Required';
      }
      if (!formData.educationSection.fieldOfStudy) {
        errors.educationSection.fieldOfStudy = 'Required';
      }
    }
    if (!formData.feedback || formData.feedback.length < 50) {
      errors.feedback = 'Required and must be at least 50 characters';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  if (submitted){
        return (<SurveyForm formData={formData}/>)
   }
  return (
        <div className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Survey Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full p-2 pl-10 text-sm text-gray-700 ${errors.fullName? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
            </div>
      
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full p-2 pl-10 text-sm text-gray-700 ${errors.email? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
      
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="surveyTopic">
                Survey Topic
              </label>
              <select
                id="surveyTopic"
                name="surveyTopic"
                value={formData.surveyTopic}
                onChange={handleInputChange}
                className={`w-full p-2 pl-10 text-sm text-gray-700 ${errors.surveyTopic? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select a topic</option>
                <option value="Technology">Technology</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
              </select>
              {errors.surveyTopic && <p className="text-red-500 text-xs">{errors.surveyTopic}</p>}
            </div>
      
            {formData.surveyTopic === 'Technology' && (
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2">Technology Section</h3>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="favoriteProgrammingLanguage">
                    Favorite Programming Language
                  </label>
                  <select
                    id="favoriteProgrammingLanguage"
                    name="favoriteProgrammingLanguage"
                    value={formData.technologySection.favoriteProgrammingLanguage}
                    onChange={handleInputChange}
                    className={`w-full p-2 pl-10 text-sm text-gray-700 ${errors.technologySection.favoriteProgrammingLanguage? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select a language</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="C#">C#</option>
                  </select>
                  {errors.technologySection.favoriteProgrammingLanguage && <p className="text-red-500 text-xs">{errors.technologySection.favoriteProgrammingLanguage}</p>}
                </div>
      
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="yearsOfExperience">
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    value={formData.technologySection.yearsOfExperience}
                    onChange={handleInputChange}
                    className={`w-full p-2 pl-10 text-sm text-gray-700 ${errors.technologySection.yearsOfExperience? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.technologySection.yearsOfExperience && <p className="text-red-500 text-xs">{errors.technologySection.yearsOfExperience}</p>}
                </div>
              </div>
            )}
            {formData.surveyTopic === 'Health' && (
  <div className="mb-4">
    <h3 className="text-lg font-bold mb-2">Health Section</h3>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="exerciseFrequency">
        Exercise Frequency
      </label>
      <select
        id="exerciseFrequency"
        name="exerciseFrequency"
        value={formData.healthSection.exerciseFrequency}
        onChange={handleInputChange}
        className={`w-full p-2 pl-10 text-sm text-gray-700 ${errors.healthSection.exerciseFrequency? 'border-red-500' : 'border-gray-300'}`}
      >
        <option value="">Select a frequency</option>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Rarely">Rarely</option>
      </select>
      {errors.healthSection.exerciseFrequency && <p className="text-red-500 text-xs">{errors.healthSection.exerciseFrequency}</p>}
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dietPreference">
        Diet Preference
      </label>
      <select
        id="dietPreference"
        name="dietPreference"
        value={formData.healthSection.dietPreference}
        onChange={handleInputChange}
        className={`w-full p-2 pl-10 text-sm text-gray-700 ${errors.healthSection.dietPreference? 'border-red-500' : 'border-gray-300'}`}
      >
        <option value="">Select a preference</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Vegan">Vegan</option>
        <option value="Non-Vegetarian">Non-Vegetarian</option>
      </select>
      {errors.healthSection.dietPreference && <p className="text-red-500 text-xs">{errors.healthSection.dietPreference}</p>}
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicalConditions">
        Medical Conditions
      </label>
      <textarea
        id="medicalConditions"
        name="medicalConditions"
        value={formData.healthSection.medicalConditions}
        onChange={handleInputChange}
        className={`w-full p-2 pl-10 text-sm text-gray-700 ${errors.healthSection.medicalConditions? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.healthSection.medicalConditions && <p className="text-red-500 text-xs">{errors.healthSection.medicalConditions}</p>}
    </div>
  </div>
)}
{formData.surveyTopic === 'Education' && (
  <div className="mb-4">
    <h3 className="text-lg font-bold mb-2">Education Section</h3>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="highestEducationLevel">
        Highest Education Level
      </label>
      <select
        id="highestEducationLevel"
        name="highestEducationLevel"
        value={formData.educationSection.highestEducationLevel}
        onChange={handleInputChange}
        className={`w-full p-2 pl-10 text-sm text-gray-700 ${errors.educationSection.highestEducationLevel? 'border-red-500' : 'border-gray-300'}`}
      >
        <option value="">Select a level</option>
        <option value="High School">High School</option>
        <option value="Bachelor's Degree">Bachelor's Degree</option>
        <option value="Master's Degree">Master's Degree</option>
        <option value="Ph.D.">Ph.D.</option>
      </select>
      {errors.educationSection.highestEducationLevel && <p className="text-red-500 text-xs">{errors.educationSection.highestEducationLevel}</p>}
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fieldOfStudy">
        Field of Study
      </label>
      <input
        type="text"
        id="fieldOfStudy"
        name="fieldOfStudy"
        value={formData.educationSection.fieldOfStudy}
        onChange={handleInputChange}
        className={`w-full p-2 pl-10 text-sm text-gray-700 ${errors.educationSection.fieldOfStudy? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.educationSection.fieldOfStudy && <p className="text-red-500 text-xs">{errors.educationSection.fieldOfStudy}</p>}
    </div>
  </div>
)}

<div className="mb-4">
  <h3 className="text-lg font-bold mb-2">Feedback Section</h3>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedback">
      Your Feedback
    </label>
    <textarea
      id="feedback"
      name="feedback"
      value={formData.feedback}
      onChange={handleInputChange}
      className={`w-full p-2 pl-10 text-sm text-gray-700 ${errors.feedback? 'border-red-500' : 'border-gray-300'}`}
    />
    {errors.feedback && <p className="text-red-500 text-xs">{errors.feedback}</p>}
  </div>
</div>

<button type="submit" className="bg-blue-500  text-white font-bold py-2 px-4 rounded">
  Submit Survey
</button>
            </form>
            </div>
  )
}


export default SurveyForm
 