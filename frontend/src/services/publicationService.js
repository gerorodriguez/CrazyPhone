const apiUrl = 'http://localhost:8080/api';

export const addPublication = async (newPublication) => {
  try {
    const response = await fetch(apiUrl + '/publications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('AUTH_TOKEN')),
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

export const getPublicationById = (id) => {
  console.log(JSON.parse(localStorage.getItem('AUTH_TOKEN')));
  return fetch(`${apiUrl}/publications/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('AUTH_TOKEN')),
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      console.log(response);
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

