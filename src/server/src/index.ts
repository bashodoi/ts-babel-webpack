import express from 'express';

import name from 'lib/Name';
import greeting from '~common/Greeting';

(async function(): Promise<void> {
    const app = express();
    const port = 3000;

    app.get('/', (req, res) => {
        res.send(greeting());
    });

    app.post('/post', (req, res) => res.send({ value: `${greeting()} ${name('World')} from post` }));

    app.listen(port, () => console.log(`${greeting()} ${name('World')} server listening on port ${port}!`));
})();
