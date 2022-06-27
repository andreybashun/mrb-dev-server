import {Body, Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {DocumentService} from "./document.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {CreateDocDto} from "./dto/create-doc.dto";

@Controller ('document')
export class DocumentController {
    constructor (private documentService: DocumentService) {
    }

    @Post ()
    @UseInterceptors (FileInterceptor ('file'))
    create (@UploadedFile () file, @Body () dto: CreateDocDto) {
        return this.documentService.create (dto, file);
    }

    getOne () {

    }

    @Get ()
    getAll () {
        return this.documentService.getAll ();
    }

    delete () {

    }
}
