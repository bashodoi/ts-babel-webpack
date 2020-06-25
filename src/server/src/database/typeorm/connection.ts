import { createConnection, Connection } from 'typeorm';

export async function connect(): Promise<Connection> {
    try {
        const connection = await createConnection();

        console.log('TypeORM connected to db');
        return connection;
    } catch (e) {
        console.error(e);
        console.error('Unable to connect to db with TypeORM');
        throw Error(e.message);
    }
}
