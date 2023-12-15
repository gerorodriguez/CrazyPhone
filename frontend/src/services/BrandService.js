const apiUrl = 'http://localhost:8080/api';

export const getBrands = () => {
  return fetch(`${apiUrl}/brands`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
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

export const createBrand = (brand) => {
  return fetch(`${apiUrl}/brands`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('AUTH_TOKEN')),
    },
    body: JSON.stringify(brand),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const updateBrand = (id, brand) => {
  return fetch(`${apiUrl}/brands/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('AUTH_TOKEN')),
    },
    body: JSON.stringify(brand),
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

export const deleteBrand = (id) => {
  return fetch(`${apiUrl}/brands/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('AUTH_TOKEN'))}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error en la solicitud DELETE');
      }
      return;
    })
    .then((data) => {
      console.log('Publicación eliminada con éxito:', data);
    })
    .catch((error) => {
      console.error('Hubo un error al eliminar la publicación:', error);
    });
};
