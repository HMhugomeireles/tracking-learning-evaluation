import express from 'express';
import { loadLogConfig } from './config/logging';
import { logging } from './lib/logger/LogManager';

loadLogConfig();
const logger = logging.getLogger('server.config');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi!');
});

app.listen(3000, () => {
  logger.info('The application is listening on port 3000!');
});
