import ioredis, { Redis } from 'ioredis';

// export const initialize = ({ host }: { host: string }): Promise<Redis> => {
//     return new Promise((resolve, reject) => {
//         const redis = new ioredis({
//             host,
//         });

//         redis.on('connect', () => {
//             console.log('Successfully connected to redis');
//             resolve(redis);
//         });

//         redis.on('error', e => {
//             reject(e);
//         });

//         return redis;
//     });
// };

export class RedisConnection {
    private static instance: Redis;

    static connect({ host }: { host: string }): Promise<Redis> {
        // eslint-disable-next-line new-cap
        // const redis = new ioredis({
        //     host,
        // });

        // redis.on('connect', () => {
        //     console.log('Successfully connected to redis');
        // });

        // return redis;

        return new Promise((resolve, reject): void => {
            const redis = new ioredis({
                host,
            });

            redis.on('connect', () => {
                console.log('Successfully connected to redis');
                RedisConnection.instance = redis;
                resolve(redis);
            });

            redis.on('error', e => {
                reject(e);
            });
        });
    }

    static getInstance(): Redis {
        if (RedisConnection.instance) {
            return RedisConnection.instance;
        } else {
            throw Error('Instantiate Redis intance');
        }
    }
}
