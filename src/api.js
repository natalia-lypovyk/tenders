import { baseUrl } from './constants';

export const getTenders = async () => {
  const response = await fetch(baseUrl);

  return response.json();
};

export const getTender = async (query) => {
  const response = await fetch(query);

  return response.json();
};
