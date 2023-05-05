import { Module } from '@nestjs/common';
import { OrganizationModule } from './organization/organization.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/organizations'),
    OrganizationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
