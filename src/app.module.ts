import {Module} from "@nestjs/common";
import { DocumentModule } from './document/document.module';
import {MongooseModule} from "@nestjs/mongoose";
import { S3Module } from './s3/s3.module';
import {ConfigModule} from "@nestjs/config";


@Module({


  imports: [
      ConfigModule.forRoot({
        isGlobal:true
      }),
      MongooseModule.forRoot('mongodb://localhost:27017/mrb-info?readPreference=primary&directConnection=true&ssl=false'),
      DocumentModule,
      S3Module]
})
export class AppModule{}
