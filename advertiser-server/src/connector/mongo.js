import Mongoose from 'mongoose';

const mongoConnString = 'mongodb://localhost:27017/advertiser';

Mongoose.Promise = Promise;
Mongoose.connect(mongoConnString);

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