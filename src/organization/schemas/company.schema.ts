import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Company extends Document {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  email: string;

  @Prop()
  country: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
