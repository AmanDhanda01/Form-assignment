import React from 'react'

const JobSummary = ({formData}) => {
  return (
    <div>
        <div className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Job Application Summary</h2>
      <ul className="list-none mb-4">
      <li> <span className="text-gray-700 font-bold">Applicant Name:</span> {formData.fullName}</li>
        <li> <span className="text-gray-700 font-bold">Email:</span> {formData.email}</li>
        <li> <span className="text-gray-700 font-bold">Phone Number:</span> {formData.phoneNumber}</li>
        <li> <span className="text-gray-700 font-bold">Position Applied For: </span> {formData.position}</li>
        {formData.position === 'Developer' || formData.position === 'Designer' ? (
          <li> <span className="text-gray-700 font-bold">Years of Experience: </span> {formData.yearsExperience}</li>
        ) : null}
        {formData.position === 'Designer' && (
          <li> <span className="text-gray-700 font-bold">Portfolio URL: </span>{formData.portfolioUrl}</li>
        )}
        {formData.position === 'Manager' && (
          <li> <span className="text-gray-700 font-bold">Management Experience: </span>{formData.managementExperience}</li>
        )}
        <li> <span className="text-gray-700 font-bold">Skills: </span> {formData.skills.join(', ')}</li>
        <li>  <span className="text-gray-700 font-bold">Preferred Interview Date: </span> {formData.interviewTime.replace("T"," ")}</li>
        
      </ul>
      <p className="text-gray-700 text-sm">
        Thank you for applying.
      </p>
    </div>
    </div>
  )
}

export default JobSummary
