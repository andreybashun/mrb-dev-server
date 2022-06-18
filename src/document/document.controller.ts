import {Controller, Get} from '@nestjs/common';

@Controller('document')
export class DocumentController {

    create(){

    }

    getOne(){

    }
    @Get()
    getAll(){
        return 'ok'
    }

    delete(){

    }
}
