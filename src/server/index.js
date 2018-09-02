import express from 'express';
import { resolve } from 'path';
import webpackMiddleware from './webpackMiddleware.js';

const app = express();

app.use(webpackMiddleware('../webpack/webpack.config.js'));
app.use('/bundle', express.static(resolve(__dirname, '../client/bundle')));
app.get('/', (req, res) => res.sendFile('index.html', {
    root: resolve(__dirname, '../client/')
}));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));