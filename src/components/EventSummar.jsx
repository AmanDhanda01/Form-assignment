import React from 'react';

const EventSummar = ({ values }) => {
  return (
    <div className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Event Registration Summary</h2>
      <ul className="list-none mb-4">
        <li>
          <span className="text-gray-700 font-bold">Name:</span> {values.name}
        </li>
        <li>
          <span className="text-gray-700 font-bold">Email:</span> {values.email}
        </li>
        <li>
          <span className="text-gray-700 font-bold">Age:</span> {values.age}
        </li>
        <li>
          <span className="text-gray-700 font-bold">Attending with guest:</span> {values.attendingWithGuest ? 'Yes' : 'No'}
        </li>
        {values.attendingWithGuest && (
          <li>
            <span className="text-gray-700 font-bold">Guest name:</span> {values.guestName}
          </li>
        )}
      </ul>
      <p className="text-gray-700 text-sm">
        Thank you for registering for the event! We look forward to seeing you there.
      </p>
    </div>
  );
};

export default EventSummar;