import Mongoose from 'mongoose';
import env from '../../env';

const {mongoConnString} = env;

Mongoose.Promise = Promise;
Mongoose.connect(mongoConnString);

/**
 * Create schema for campaigns
 */
const CampaignsSchema = Mongoose.Schema({
    id: { type: Number, index: true, unique: true },
    name: String,
    goal: String,
    total_budget: Number,
    status: String,
    platforms:{}
});

const Campaigns = Mongoose.model('campaigns', CampaignsSchema);

export {
    Campaigns
};