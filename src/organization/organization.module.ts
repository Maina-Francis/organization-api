import { Module } from '@nestjs/common';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class OrganizationModule {}
