export const baseUrl = 'https://public.mtender.gov.md/tenders';

export const getTenders = async (query) => {
  const response = await fetch(query);

  return response.json();
};
