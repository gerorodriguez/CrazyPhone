import { useContext } from "react";
import { APIContext } from "./ApiContext";

const apiUrl = 'http://localhost:8080/api';

export const addPublication = async (newPublication) => {
  const { toggleLoading } = useContext(APIContext);
  try {
    toggleLoading(true);
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
  } finally {
    toggleLoading(false);
  }
};
