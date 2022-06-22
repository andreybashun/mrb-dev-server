import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import *as uuid from 'uuid'


@Injectable()
export class S3Service {

    async upload(file) : Promise<string> {
        //const { originalname } = file;
        const  fileName = uuid.v4();
        console.log("test",fileName)
        const bucketS3 = 'mrb-doc';
        await this.uploadS3(file.buffer, bucketS3, fileName);
        return fileName
    }

    async uploadS3(file, bucket, name) {
        const s3 = this.getS3();
        const params = {
            Bucket: bucket,
            Key: String(name),
            Body: file,
        };
        return new Promise((resolve, reject) => {
            let s3Response = s3.upload(params, (err, data) => {
                if (err) {
                    console.log(err);
                    reject(err.message);
                }
                resolve(data);
                console.log(s3Response);
            });
        });
    }

    getS3() {
        return new S3({
            accessKeyId: 'YCAJEgPeLLENuh0iiocABjh5q',
            secretAccessKey: 'YCO3UkhdeDbzqbvDz6BptW6UgzjqmJSb_Q3U1Xrr',
            endpoint: 'storage.yandexcloud.net',
            s3ForcePathStyle: true,
            signatureVersion: 'v4',
            region: 'ru-central1'
        });
    }
}
