import { Injectable } from '@nestjs/common';
import { CompanyInterface } from './company.dto';

@Injectable()
export class CompanyService {
  private readonly company: CompanyInterface[] = [];

  //   get all companies data
  getAllCompanyData() {
    // replace samplecompanydata with company
    return this.company;
  }

  addNewCompany(company: CompanyInterface) {
    return this.company.push(company);
  }
}
