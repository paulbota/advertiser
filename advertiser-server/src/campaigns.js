import {Campaigns} from './connector/mongo';

export const getAllCampaigns = async () => Campaigns.find({});

