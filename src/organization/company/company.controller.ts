import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
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

  //   GET company by name
  @Get(':company')
  getCompanyByName(@Param('company') company: string) {
    const foundCompany = this.companyService.getCompanyBasedOnName(company);

    // Exception handling incase company is not found
    if (foundCompany) return foundCompany;
    else
      throw new HttpException("Company doesn't exist", HttpStatus.BAD_REQUEST);
  }

  //   Create company
  @Post('/create')
  @UsePipes(ValidationPipe)
  createNewCompany(@Body() company: CompanyDTO) {
    this.companyService.addNewCompany(company);
  }

  //   //   Update company
  //   @UsePipes(ValidationPipe)
  //   @Patch(':name')
  //   UpdateCompanyData(
  //     @Param('name') name: string,
  //     @Body() updateUser: CompanyDTO,
  //   ) {}

  //   Delete a company
}
