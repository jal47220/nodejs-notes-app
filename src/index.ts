/* import * as http from 'http';
import { app } from './app';

const server: http.Server = new http.Server(app);

export const port = '3000';
async function start(): Promise<http.Server> {
  return server.listen(port, () => {
    console.log(`Listening on port ${port}.`);
  });
}

start().catch((err) => {
  console.log('Something went wrong starting the app: ', err);
  process.exit(1);
}); */