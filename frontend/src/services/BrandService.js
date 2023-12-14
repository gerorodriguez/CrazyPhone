const apiUrl = 'http://localhost:8080/api';


export const getBrands = () => {
  console.log(JSON.parse(localStorage.getItem('AUTH_TOKEN')));
  return fetch(`${apiUrl}/brands`, {
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
} 