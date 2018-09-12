import express from 'express';
import cors from 'cors';
import { getAllCampaigns } from '../middleware/campaigns';
import { importImage } from '../middleware/import';

const app = express();

app.use(cors());

/**
 *  Endpoint for retrieving the campaigns
 */
app.get('/campaigns', async (req, res) => res.send(await getAllCampaigns()));


/**
 *  Endpoint for retrieving an image
 */
app.get('/image', async (req, res) => {
    const imageName = req.query.imageName;
    res.type('image/jpeg');
    res.send(await importImage(`images/${imageName}`));
});

export default app;