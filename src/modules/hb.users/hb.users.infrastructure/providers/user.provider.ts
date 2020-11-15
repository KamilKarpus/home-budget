import { UserSchema } from "../documents/user.document";
import { Connection } from 'mongoose';
import { GrantSchema } from "../documents/grant.dto.document";

export const usersProviders = [
    {
      provide: 'USERS_MODEL',
      useFactory: (connection: Connection) => connection.model('Users', UserSchema),
      inject: ['DATABASE_CONNECTION'],
    },
    {
      provide: 'GRANT_ITEM',
      useFactory: (connection: Connection) => connection.model('Grants', GrantSchema),
      inject: ['DATABASE_CONNECTION'],
    }

  ];