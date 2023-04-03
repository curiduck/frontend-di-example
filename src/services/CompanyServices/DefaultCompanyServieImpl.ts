import "reflect-metadata";
import Container, { Inject, Service } from "typedi";
import { ICompanyService } from "./ICompanyService";
import type { IConnectorService } from "../ConnectorService/IConnectorService";
import { HttpConnectorServiceImpl } from "../ConnectorService/HttpConnectorServiceImpl";

@Service()
export class DefaultCompanyServiceImpl implements ICompanyService {
  private defaultCompanyURL: string = "https://www.company.com";
  private readonly connectorService: IConnectorService;

  constructor() {
    // @Inject(() => HttpConnectorServiceImpl) connectorService: IConnectorService
    this.connectorService = Container.get<IConnectorService>("connector.http");
  }

  getConnection = () => {
    return this.connectorService.createConnector(this.defaultCompanyURL);
  };

  getCompanyData(): CompanyData {
    const connector = this.getConnection();
    connector.send();
    connector.receive();

    return {
      name: "회사 이름",
      ceoName: "CEO 이름",
      contactNumber: "100-111-1111",
      email: "comapny@company.io",
      registerNumber: "1111-222-333-444",
    };
  }

  getCompanyDescription(): string[] {
    const connector = this.getConnection();
    connector.send();
    connector.receive();
    return ["회사 설명 1", " 회사 설명 2"];
  }
  getCompanyPhoto(): string[] {
    const connector = this.getConnection();
    connector.send();
    connector.receive();
    return ["", ""];
  }
}
