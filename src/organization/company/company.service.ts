import { Injectable } from '@nestjs/common';
import { CompanyDTO } from './company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from '../schemas/company.schema';
import { Model } from 'mongoose';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private CompanyModel: Model<Company>,
  ) {}

  //   private readonly company: CompanyInterface[] = [];

  //   get all companies data
  async getAllCompanyData() {
    return this.CompanyModel.find();
  }

  // get a company based on its name
  getCompanyBasedOnName(name: string) {
    return this.CompanyModel.find((company) => this.CompanyModel.name === name);
  }

  //   create a new company using Post Request
  addNewCompany(company: CompanyDTO) {
    return this.CompanyModel.create(company);
  }

  //   update a company using Patch Request
  //   updateCompany(company): CompanyDTO {
  //     return this.company.push(company);
  //   }

  //   delete a company using Delete Request
}
