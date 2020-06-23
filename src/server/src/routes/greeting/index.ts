import { Router } from 'express';

import nameCutifier from 'lib/Name';
import greeting from '~common/Greeting';

const router = Router();

router.get('/', (req, res) => {
    res.send(greeting());
});

router.post('/cute', (req, res) => {
    const {
        body: { name },
    } = req;
    res.send({ value: `${greeting()} ${nameCutifier(name, 'diddlidoody')} from post` });
});

export default router;
