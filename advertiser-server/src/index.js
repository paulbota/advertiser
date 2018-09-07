import express from 'express';
import {importFile} from './import';
import {Campaigns} from './connector/mongo';
import {getAllCampaigns} from './campaigns';
import cors from 'cors';

const app = express();
const port = 8000;
const fileName = 'data/data.json';

app.use(cors());

app.get('/campaigns', async (req, res) => res.send(await getAllCampaigns()));

app.listen(port, () =>
    console.log(`Server started n port ${port}`),
);

Campaigns.remove({}).exec();
importFile(fileName)
    .then((data) => Campaigns.insertMany(data.map(it => new Campaigns(it))))
    .then(console.log);
