import {Campaigns} from '../connector/mongo';

/**
 * Retrieves the campaigns from the database
 */
export const getAllCampaigns = async () => Campaigns.find({});

