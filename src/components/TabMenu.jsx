import React, { useEffect, useState } from 'react'
import { Link,NavLink,matchRoutes} from 'react-router-dom';

const TabMenu = () => {

  return (
    <div>
        <div className="flex justify-center mb-4">
      <ul className="flex border-b border-gray-200">
        <li className="-mb-px mr-1">
          <NavLink
            to="/"
            className={`inline-block py-2 px-4  'text-gray-600 hover:text-gray-900'}`}
          >
            Event Registration
          </NavLink>
        </li>
        <li className="-mb-px mr-1">
          <NavLink
            to="/job-application"
            className={`inline-block py-2 px-4 'text-gray-600 hover:text-gray-900'}`}
          >
            Job Application
          </NavLink>
        </li>
        <li className="-mb-px mr-1">
          <NavLink
            to="/survey-form"
            className={`inline-block py-2 px-4 'text-gray-600 hover:text-gray-900'}`}
          >
            Survey Form
          </NavLink>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default TabMenu
