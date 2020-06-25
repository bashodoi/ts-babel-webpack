import { Connection } from 'typeorm';
import { connect } from './connection';

export class TypeORMConnection {
    private static instance: Connection;

    static async connect(): Promise<Connection> {
        TypeORMConnection.instance = await connect();
        return TypeORMConnection.instance;
    }

    static getInstance(): Connection {
        if (TypeORMConnection.instance) {
            return TypeORMConnection.instance;
        } else {
            throw Error('TypeORMConnection intance not found');
        }
    }
}
