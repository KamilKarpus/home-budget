import * as mongoose from 'mongoose';
import { Environment } from 'src/environment';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(Environment.CoreDbConnectionString)
  },
];