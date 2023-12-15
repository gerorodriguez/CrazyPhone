const apiUrl = 'http://localhost:8080/api';

export const addPublication = async (newPublication, images) => {
  try {
    const formData = new FormData();

    formData.append('data', JSON.stringify(newPublication));

    images.forEach((image) => {
      formData.append(`files`, image);
    });

    const response = await fetch(apiUrl + '/publications', {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('AUTH_TOKEN')),
      },
      body: formData,
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

export const updatePublication = async (publicationId, updatedPublication) => {
  try {
    const response = await fetch(`${apiUrl}/publications/${publicationId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('AUTH_TOKEN')),
      },
      body: JSON.stringify(updatedPublication),
    });

    if (!response.ok) {
      throw new Error('Response is NOT ok');
    }

    return response.json();
  } catch (error) {
    console.error('Error during publication update:', error);
    throw error;
  }
};

export const getLoggedInUserId = () => {
  const authToken = localStorage.getItem('AUTH_TOKEN');

  // Verifica si el token existe
  if (authToken) {
    try {
      // Decodifica el token (esto puede variar según el formato del token)
      const decodedToken = JSON.parse(atob(authToken.split('.')[1]));

      // Devuelve el ID del usuario desde el token
      return decodedToken.userId;
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return null;
    }
  }

  // Si no hay token, el usuario no está autenticado
  return null;
};

export const getMyPublications = async () => {
  try {
    const response = await fetch(`${apiUrl}/publications/by-user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('AUTH_TOKEN')),
      },
    });

    if (!response.ok) {
      throw new Error('Response is NOT ok');
    }

    const publications = await response.json();
    return publications;
  } catch (error) {
    console.error('Error al obtener mis publicaciones:', error);
    throw error;
  }
};

export const getAllPublications = async () => {
  const response = await fetch(`${apiUrl}/publications`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('No autorizado. Por favor, inicia sesión.');
    } else {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
  }

  const data = await response.json();
  return data;
};

export const deletePublication = async (publicationId) => {
  await fetch(`${apiUrl}/publications/${publicationId}`, {
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
