import { importFile } from './middleware/import';
import { Campaigns } from './connector/mongo';
import app from './controllers/campaigns';
import env from '../env';

const {port, fileName} = env;

/**
 * Start the server
 */
app.listen(port, () =>
    console.log(`Server started n port ${port}`),
);

/**
 * Drop old database and import the new one
 */
Campaigns.deleteMany({}).exec();
importFile(fileName)
    .then((data) => Campaigns.insertMany(data.map(it => new Campaigns(it))));
