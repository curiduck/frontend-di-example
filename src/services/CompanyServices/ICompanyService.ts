export interface ICompanyService {
  getCompanyData(): CompanyData;
  getCompanyDescription(): Array<string>;
  getCompanyPhoto(): Array<string>;
}
