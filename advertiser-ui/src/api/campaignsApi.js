const url = 'http://localhost:8000';

/**
 * Fetches the campaigns from api
 */
export const getAllCampaigns = () => fetch(`${url}/campaigns`).then((response) => response.json());


/**
 * Create the image url
 */
export const generateImageURL = (imageName) => `${url}/image?imageName=${imageName}`;