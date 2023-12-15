const apiUrl = 'http://localhost:8080/api';

export const getModels = () => {
    return fetch(`${apiUrl}/models`, {
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

export const createModel = (brand) => {
    return fetch(`${apiUrl}/models`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('AUTH_TOKEN')),
        },
        body: JSON.stringify(brand)
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
}

export const updateModel = (id, brand) => {
    return fetch(`${apiUrl}/models/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('AUTH_TOKEN')),
        },
        body: JSON.stringify(brand)
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

export const deleteModel = (id) => {
    return fetch(`${apiUrl}/models/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('AUTH_TOKEN'))}`,
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud DELETE');
            }
            return;
        })
        .then(data => {
            console.log('Publicación eliminada con éxito:', data);
        })
        .catch(error => {
            console.error('Hubo un error al eliminar la publicación:', error);
        });
}