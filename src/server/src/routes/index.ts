import app from '../config/express';

import GreetingRouter from './greeting';

app.use('/greeting', GreetingRouter);
