import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Doc, DocDocument} from "./schemas/document.schema";
import {Model} from "mongoose";
import {CreateDocDto} from "./dto/create-doc.dto";
import {S3Service} from "../s3/s3.service";


@Injectable ()
export class DocumentService {
    constructor (@InjectModel (Doc.name) private docModel: Model<DocDocument>,
                 private s3Servise: S3Service) {
    }

    async create (dto: CreateDocDto, key): Promise<Doc> {
        const fileKey = await this.s3Servise.upload (key)
        return await this.docModel.create ({...dto, key: fileKey});
    }

    async getOne () {
    }

    async getAll (): Promise<Doc[]> {
        return this.docModel.find ();
    }

    async delete () {

    }

}

