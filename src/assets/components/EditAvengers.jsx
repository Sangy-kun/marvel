import React, { useState } from 'react';

const EditAvenger = ({ avenger, onUpdate }) => {
  const [name, setName] = useState(avenger.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(avenger.id, { name });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-green-500 text-white px-2 py-1 rounded">
        Update
      </button>
    </form>
  );
};

export default EditAvenger;
