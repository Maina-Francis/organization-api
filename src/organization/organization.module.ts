import { Module } from '@nestjs/common';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';
import { Company, CompanySchema } from './schemas/company.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class OrganizationModule {}
