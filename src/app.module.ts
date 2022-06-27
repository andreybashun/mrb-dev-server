import {Module} from "@nestjs/common";
import {DocumentModule} from './document/document.module';
import {MongooseModule} from "@nestjs/mongoose";
import {S3Module} from './s3/s3.module';
import {ConfigModule} from "@nestjs/config";
import * as path from "path";

const MONGODB_SSLCA = path.join (__dirname, '..', 'CA.pem');

@Module ({
    imports: [
        ConfigModule.forRoot ({
            isGlobal: true
        }),
        MongooseModule.forRoot ('mongodb://rc1b-dx5pz0isx3vjkswu.mdb.yandexcloud.net:27018/db-mrb?replicaSet=rs01&&ssl=true', {
                ssl: true,
                sslValidate: true,
                sslCA: MONGODB_SSLCA,
                user: process.env.MONGODB_USER,
                pass: process.env.MONGODB_PASS
            }
        ),
        DocumentModule,
        S3Module]

})
export class AppModule {
}
