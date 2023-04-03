import { ICompanyService } from "../../services/CompanyServices/ICompanyService";

export type FooterPropTypes = {
  companyService: ICompanyService;
};

export type CompanyInformation = {
  name: string;
  phoneNumber: string;
  ceoName: string;
  email: string;
  registerNumber: string;
};
