import { UserSchema } from "../documents/user.document";
import { Connection } from 'mongoose';

export const usersProviders = [
    {
      provide: 'USERS_MODEL',
      useFactory: (connection: Connection) => connection.model('Users', UserSchema),
      inject: ['DATABASE_CONNECTION'],
    }

  ];