import path from 'path';
import express from 'express';

const app = express();

const INDEX_PAGE = path.join(__dirname, './index.html');
const CLIENT_SCRIPT = path.join(__dirname, './client.js');

app.get('/', (_, res) => res.sendFile(INDEX_PAGE));

app.get('/client.js', (_, res) => res.sendFile(CLIENT_SCRIPT));

app.listen(80, () => console.log('listening'));
