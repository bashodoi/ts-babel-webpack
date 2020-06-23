import express, { Express } from 'express';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';

let server = null;

const initServer = (): Express => {
    server = express();

    // parse JSON requests payloads, based on body-parser
    server.use(express.json({ limit: '50mb' }));

    // parses requests with urlencoded payloads, based on body-parser
    server.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 }));

    // server.use(cookieParser());

    // server.use(cors());

    // extracts locale from query and adds to session
    // server.use(locale);

    return server;
};

export default server ? server : initServer();
