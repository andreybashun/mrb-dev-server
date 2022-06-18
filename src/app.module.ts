import {Module} from "@nestjs/common";
import { DocumentModule } from './document/document.module';
import {MongooseModule} from "@nestjs/mongoose";


@Module({


  imports: [
      MongooseModule.forRoot('mongodb://localhost:27017/mrb-info?readPreference=primary&directConnection=true&ssl=false'),
      DocumentModule]
})
export class AppModule{}
