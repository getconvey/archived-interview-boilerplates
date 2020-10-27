import cors from 'cors';
import express from 'express';
import http from 'http';

const app = express();
const server = http.Server(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

server.listen(4000, () => console.log('🚀 Server ready at http://localhost:4000'));
