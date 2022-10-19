import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
    @Prop({ required: false })
    id: string

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);