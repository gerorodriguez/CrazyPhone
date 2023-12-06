const apiUrl = 'http://localhost:8080/api';

export const register = (newUser) => {
  return fetch(apiUrl + '/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => {
      if (!response.ok) {
        if (response.status === 409) {
          throw new Error('El mail ya se encuentra ya registrado');
        } else {
          throw new Error('Error en la solicitud.');
        }
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error durante el registro:', error);
      throw error;
    });
};

export const getAccount = () => {
  console.log(JSON.parse(localStorage.getItem('AUTH_TOKEN')));
  return fetch(`${apiUrl}/account`, {
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
