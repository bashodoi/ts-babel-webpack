import app from 'config/express';

import './routes';

(async function(): Promise<void> {
    function initializeServer(): void {
        const port = 3000;
        app.listen(port, () => console.log(`Express server listening on port ${port}!`));
    }

    Promise.all([])
        .then(([redisInstance]) => {
            initializeServer();
        })
        .catch(e => {
            console.error('Unable to initialize app correctly');
        });
})();
