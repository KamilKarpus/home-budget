import { Bucket, Storage } from '@google-cloud/storage';
import { IFileStorage } from '../application/file.storage.interface';


export class FileStorage implements IFileStorage{
    private _storage : Storage;
    private _bucketName : string;

    constructor(bucketName : string, authFilePath : string){

        console.log(authFilePath);
        this._storage = new Storage({
            keyFilename: authFilePath,
            projectId: "velvety-rarity-298815"
        });
        this._bucketName = bucketName;        
    }



    private async getBucket() : Promise<Bucket>{
        return await this._storage.bucket(this._bucketName);
    }

    public async uploadFile(file : Express.Multer.File, fileName : string) : Promise<string>{
        const { buffer } = file;

        const bucket = await this.getBucket();
        const blob = bucket.file(fileName);

        const blobStream = blob.createWriteStream({
            resumable : false
        });

        blobStream.end(buffer);

        
        return `https://storage.cloud.google.com/${this._bucketName}/${fileName}`;
        }
    }