import { BASE_URL } from './constants';

export const getTenders = async() => {
  const response = await fetch(BASE_URL);

  return response.json();
};

export const getTender = async(query) => {
  const res = await fetch(query);

  return res.json();
};
