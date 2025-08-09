import React from 'react';
import EditAvenger from './EditAvenger';

const AvengersList = ({ avengers, onUpdate, onDelete }) => {
  return (
    <div>
      {avengers.map((avenger) => (
        <div key={avenger.id} className="mb-4 p-4 border rounded">
          <h2 className="text-xl font-bold">{avenger.name}</h2>
          <EditAvenger avenger={avenger} onUpdate={onUpdate} />
          <button onClick={() => onDelete(avenger.id)} className="bg-red-500 text-white px-2 py-1 rounded">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default AvengersList;
