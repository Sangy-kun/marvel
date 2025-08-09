import { useState, useEffect } from 'react';
import AvengersList from './components/AvengersList';
import AddAvenger from './components/AddAvenger';
import { getAvengers, addAvenger, updateAvenger, deleteAvenger } from './api/avengers';

function App() {
  const [avengers, setAvengers] = useState([]);

  useEffect(() => {
    fetchAvengers();
  }, []);

  const fetchAvengers = async () => {
    const data = await getAvengers();
    setAvengers(data);
  };

  const handleAdd = async (avenger) => {
    await addAvenger(avenger);
    fetchAvengers();
  };

  const handleUpdate = async (id, updatedAvenger) => {
    await updateAvenger(id, updatedAvenger);
    fetchAvengers();
  };

  const handleDelete = async (id) => {
    await deleteAvenger(id);
    fetchAvengers();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Avengers Marvel</h1>
      <AddAvenger onAdd={handleAdd} />
      <AvengersList avengers={avengers} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}

export default App;
