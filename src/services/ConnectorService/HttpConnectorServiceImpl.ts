import { Service } from "typedi";
import { IConnectorService } from "./IConnectorService";

@Service()
export class HttpConnectorServiceImpl implements IConnectorService {
  createConnector(destinationUri: string): Connector {
    // 실제 객체가 생성되었다고 가정한다.
    // 현재 예제는 모킹 데이터이다
    return {
      type: "http",
      dataType: "json",
      localIp: "127.0.0.1",
      destinationUri,
      send: () => {
        console.log("HTTP data send!");
      },
      receive: () => {
        console.log("HTTP data receive!");
      },
    };
  }
}
