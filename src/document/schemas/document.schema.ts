

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type DocDocument = Doc & Document;
@Schema()
export class Doc {
    @Prop()
    name: string;

    @Prop()
    type: string;

    @Prop()
    author: string;

    @Prop()
    status: string;

    @Prop()
    key: string;
}
export const DocSchema = SchemaFactory.createForClass(Doc);