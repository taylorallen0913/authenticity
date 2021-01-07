import { MikroORM } from "@mikro-orm/core";
import { User } from "entities/User";

const main = async() => {
    const orm = await MikroORM.init({
        entities: [User],
        dbName: 'auth',
        type: 'postgresql',
        debug: process.env.NODE_ENV !== 'production',
    });
};


main();
