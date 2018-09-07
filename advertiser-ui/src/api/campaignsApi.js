const url = 'http://localhost:8000';

export const getAllCampaigns = () => fetch(`${url}/campaigns`).then((response) => response.json())
