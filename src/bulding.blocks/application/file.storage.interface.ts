export interface IFileStorage{
    uploadFile(file : Express.Multer.File, fileName : string) : Promise<string>
}