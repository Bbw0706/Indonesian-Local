const express = require('express');
const app = express();
const redis = require('redis');
const client = redis.createClient();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');
const cors = require('cors');

const town = require('./routes/town');

dotenv.config();

client.on('error', (err) => {
  throw err;
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/town', town);
app.use('/api-list', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Listen to the port of ${port}`));