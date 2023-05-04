import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyDTO } from './company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  // get all companies
  @Get()
  getAllCompanies() {
    return this.companyService.getAllCompanyData();
  }

  //   Create company
  @Post('/create')
  createNewCompany(@Body() company: CompanyDTO) {
    this.companyService.addNewCompany(company);
  }
}
