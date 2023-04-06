import "reflect-metadata";
import Container, { Inject, Service } from "typedi";
import { ICompanyService } from "./ICompanyService";
import type { IConnectorService } from "../ConnectorService/IConnectorService";
import { HttpConnectorServiceImpl } from "../ConnectorService/HttpConnectorServiceImpl";
import { SocketConnectorServiceImpl } from "../ConnectorService/SocketConnectorServiceImpl";

@Service()
export class GoodNewsCompanyServiceImpl implements ICompanyService {
  private defaultCompanyURL: string = "https://www.goodnews.com";
  private readonly connectorService: IConnectorService;

  constructor() {
    this.connectorService = Container.get<IConnectorService>(
      SocketConnectorServiceImpl
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
      name: "굿뉴스 신문사",
      ceoName: "김신문",
      contactNumber: "02-111-1111",
      email: "goodnews@company.io",
      registerNumber: "1214-241-392-117",
    };
  }

  getCompanyDescription(): string[] {
    const connector = this.getConnection();
    connector.send();
    connector.receive();

    return [
      "항상 좋은 소식을 알려주는 언론사입니다.",
      "언제나 빠르고 정확한 설명을 전달해줍니다",
    ];
  }
  getCompanyPhoto(): string[] {
    const connector = this.getConnection();
    connector.send();
    connector.receive();

    return [
      "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/05/22/07/20/press-2333329_1280.jpg",
    ];
  }
}
