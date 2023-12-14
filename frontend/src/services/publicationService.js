
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
