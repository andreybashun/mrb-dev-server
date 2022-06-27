import {Module} from '@nestjs/common';
import {DocumentController} from './document.controller';
import {DocumentService} from './document.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Doc, DocSchema} from "./schemas/document.schema";
import {S3Service} from "../s3/s3.service";

@Module ({
    imports: [MongooseModule.forFeature ([{name: Doc.name, schema: DocSchema}],),],
    controllers: [DocumentController],
    providers: [DocumentService, S3Service]
})
export class DocumentModule {
}
