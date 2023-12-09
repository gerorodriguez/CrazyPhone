const baseUrl = 'http://localhost:8080';

export const authenticate = (auth) => {
  return fetch(`${baseUrl}/api/authenticate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(auth),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      if (!data.token) {
        throw new Error('Token no encontrado en la respuesta');
      }
      return data.token;
    })
    .catch((error) => {
      console.error('Error durante la autenticación:', error);
      throw error;
    });
};
