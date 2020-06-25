import 'reflect-metadata';
import app from 'config/express';

import { TypeORMConnection } from 'database/typeorm/';

import './routes';

(async function(): Promise<void> {
    function initializeServer(): void {
        const port = 3000;
        app.listen(port, () => console.log(`Express server listening on port ${port}!`));
    }

    Promise.all([TypeORMConnection.connect()])
        .then(([typeORMConnection]) => {
            initializeServer();
        })
        .catch(e => {
            console.error('Unable to initialize app correctly');
        });
})();
