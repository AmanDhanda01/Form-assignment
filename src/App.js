import React, { useState, useEffect } from 'react';
import EventRegistration from './pages/EventRegistration';
import { Route, Routes } from 'react-router-dom';
import TabMenu from './components/TabMenu';
import JobRegistration from './pages/JobRegistration';
import SurveyForm from './pages/SurveyForm';


const App = () => {
  
return (
  <>
    <TabMenu/>
    <Routes>
      <Route path='/' element={<EventRegistration/>}/>
      <Route path='/job-application' element={<JobRegistration/>}/>
      <Route path='/survey-form' element={<SurveyForm/>}/>
   </Routes>
  </>
 
)
}

export default App
