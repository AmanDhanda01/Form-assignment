import React,{useState,useEffect} from 'react'
import { useForm } from '../hooks/job-registration';
import JobSummary from '../components/JobSummary';

const JobRegistration = () => {
    const { formData, errors, handleChange, handleSubmit ,submitted } = useForm();

    if(submitted){
        return (<JobSummary formData={formData}/>)
    }
  return (
    <div className='max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md'>
         <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <label htmlFor="fullName" className="mb-1 text-sm font-medium">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
            errors.fullName ? 'border-red-500' : ''
          }`}
        />
        {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName}</span>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
            errors.email ? 'border-red-500' : ''
          }`}
        />
        {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="phoneNumber" className="mb-1 text-sm font-medium">
          Phone Number
        </label>
        <input
          type="tel" // Use tel for phone number input
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
            errors.phoneNumber ? 'border-red-500' : ''
          }`}
        />
        {errors.phoneNumber && <span className="text-red-500 text-xs">{errors.phoneNumber}</span>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="position" className="mb-1 text-sm font-medium">
          Applying for Position
        </label>
        <select
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Select Position</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
        {errors.position && <span className="text-red-500 text-xs">{errors.position}</span>}
      </div>
      {formData.position === 'Developer' || formData.position === 'Designer' ? (
        <div className="flex flex-col">
          <label htmlFor="yearsExperience" className="mb-1 text-sm font-medium">
            Relevant Experience (Years)
          </label>
          <input
            type="number"
            id="yearsExperience"
            name="yearsExperience"
            value={formData.yearsExperience}
            onChange={handleChange}
            className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
              errors.yearsExperience ? 'border-red-500' : ''
            }`}
          />
          {errors.yearsExperience && (
            <span className="text-red-500 text-xs">{errors.yearsExperience}</span>
          )}
        </div>
      ) : null}
      {formData.position === 'Designer' ? (
        <div className="flex flex-col">
          <label htmlFor="portfolioUrl" className="mb-1 text-sm font-medium">
            Portfolio URL
          </label>
          <input
            type="url"
            id="portfolioUrl"
            name="portfolioUrl"
            value={formData.portfolioUrl}
            onChange={handleChange}
            className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
              errors.portfolioUrl ? 'border-red-500' : ''
            }`}
          />
          {errors.portfolioUrl && <span className="text-red-500 text-xs">{errors.portfolioUrl}</span>}
        </div>
      ) : null}
      {formData.position === 'Manager' ? (
        <div className="flex flex-col">
          <label htmlFor="managementExperience" className="mb-1 text-sm font-medium">
            Management Experience
          </label>
          <textarea
            id="managementExperience"
            name="managementExperience"
            value={formData.managementExperience}
            onChange={handleChange}
            className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
              errors.managementExperience ? 'border-red-500' : ''
            }`}
          />
          {errors.managementExperience && (
            <span className="text-red-500 text-xs">{errors.managementExperience}</span>
          )}
        </div>
      ) : null}
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium">Additional Skills</label>
        {errors.skills && (
            <span className="text-red-500 text-xs">{errors.skills}</span>
          )}
        <div className="grid grid-cols-1 gap-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              id="skill-javascript"
              name="skills"
              value="JavaScript"
              checked={formData.skills.includes('JavaScript')}
              onChange={handleChange}
              className="mr-2 accent-blue-500"
            />
            <span className="text-sm font-medium">JavaScript</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              id="skill-css"
              name="skills"
              value="CSS"
              checked={formData.skills.includes('CSS')}
              onChange={handleChange}
              className="mr-2 accent-blue-500"
            />
            <span className="text-sm font-medium">CSS</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              id="skill-python"
              name="skills"
              value="Python"
              checked={formData.skills.includes('Python')}
              onChange={handleChange}
              className="mr-2 accent-blue-500"
            />
            <span className="text-sm font-medium">Python</span>
        </label>
        </div>
        </div>
        <div className="flex flex-col">
        <label htmlFor="interviewDate" className="mb-1 text-sm font-medium">
          Preferred Interview Date
        </label>
        <input
          type="datetime-local"
          id="interviewDate"
          name="interviewTime"
          value={formData.interviewTime}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.interviewTime && (
          <span className="text-red-500 text-xs">{errors.interviewTime}</span>
        )}
      </div>
        <button type='submit' className='ml-auto bg-blue-500 rounded-md text-white p-1'>Submit</button>
        </form>
    </div>
  )
}

export default JobRegistration
