const apiUrl = 'http://localhost:8080/api';

export const addPublication = async (newPublication) => {
  try {
    const response = await fetch(apiUrl + '/publications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPublication),
    });

    if (!response.ok) {
     throw new Error('Response is NOT ok');
    }

    return response.json();
  } catch (error) {
    console.error('Error durante el registro:', error);
    throw error;
  }
};