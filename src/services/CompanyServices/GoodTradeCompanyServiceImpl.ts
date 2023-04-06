import "reflect-metadata";
import Container, { Service } from "typedi";
import { ICompanyService } from "./ICompanyService";
import type { IConnectorService } from "../ConnectorService/IConnectorService";
import { HttpConnectorServiceImpl } from "../ConnectorService/HttpConnectorServiceImpl";

@Service()
export class GoodTradeCompanyServiceImpl implements ICompanyService {
  private defaultCompanyURL: string = "https://www.company.com";
  private readonly connectorService: IConnectorService;

  constructor() {
    this.connectorService = Container.get<IConnectorService>(
      HttpConnectorServiceImpl
    );
  }

  getConnection = () => {
    return this.connectorService.createConnector(this.defaultCompanyURL);
  };

  getCompanyData(): CompanyData {
    const connector = this.getConnection();
    connector.send();
    connector.receive();

    return {
      name: "잘나가 상사",
      ceoName: "잘나가",
      contactNumber: "103-913-8847",
      email: "growgrow@company.io",
      registerNumber: "1230-888-759-235",
    };
  }

  getCompanyDescription(): string[] {
    const connector = this.getConnection();
    connector.send();
    connector.receive();

    return [
      "잘 팔리는 물건만 수입하는 상사",
      "수출이 필요할땐 언제든 팔아드립니다",
    ];
  }
  getCompanyPhoto(): string[] {
    const connector = this.getConnection();
    connector.send();
    connector.receive();
    return [
      "https://cdn.pixabay.com/photo/2014/04/05/11/20/freighter-315201_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/12/22/08/09/entrepreneur-1103719_1280.jpg",
    ];
  }
}
