const API_URL = 'http://localhost:3001/avengers'; 

export const getAvengers = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const addAvenger = async (avenger) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(avenger),
  });
  return response.json();
};

export const updateAvenger = async (id, updatedAvenger) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedAvenger),
  });
  return response.json();
};

export const deleteAvenger = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
