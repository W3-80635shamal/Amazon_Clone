// src/services/utils.js
export const createUrl = (endpoint) => {
  const baseUrl = 'http://localhost:9898'; // Adjust this base URL to your backend server address
  return `${baseUrl}/${endpoint}`;
};

export const createError = (ex) => {
  return {
    status: 'error',
    error: ex.response ? ex.response.data : ex.message,
  };
};
