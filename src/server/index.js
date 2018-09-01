import express from 'express';
import { resolve, join } from 'path';
const app = express()

const port = process.env.PORT || 8000;

app.use('/bundle', express.static(resolve(__dirname, '../client/bundle')));

app.get('/', (req, res) => res.sendFile('index.html', {
    root: resolve(__dirname, '../client/')
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))