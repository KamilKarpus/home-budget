import { join } from 'path';
import { FileStorage } from "src/bulding.blocks/infrastructure/file.storage";
import { Environment } from "src/environment";

export const StorageProvider = [
    {
        provide: 'FileStorage',
        useFactory: () => new FileStorage("homebudget-storage", join(Environment.appDirectory,"velvety-rarity-298815-a53c53253422.json"))
      },
];