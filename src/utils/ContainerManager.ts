import "reflect-metadata";
import Container from "typedi";
import { DefaultCompanyServiceImpl } from "../services/CompanyServices/DefaultCompanyServieImpl";
import { GoodNewsCompanyServiceImpl } from "../services/CompanyServices/GoodNewsCompanyServiceImpl";
import { GoodTradeCompanyServiceImpl } from "../services/CompanyServices/GoodTradeCompanyServiceImpl";

import { HttpConnectorServiceImpl } from "../services/ConnectorService/HttpConnectorServiceImpl";
import { SocketConnectorServiceImpl } from "../services/ConnectorService/SocketConnectorServiceImpl";

type ServiceRecordType = {
  [key: string]: Object;
};

const serviceRecord: ServiceRecordType = {
  "connector.socket": SocketConnectorServiceImpl,
  "connector.http": HttpConnectorServiceImpl,
  "company.default": DefaultCompanyServiceImpl,
  "company.goodnews": GoodNewsCompanyServiceImpl,
  "company.goodtrade": GoodTradeCompanyServiceImpl,
};

export const getContainer = (prefix: string, suffix: string): any => {
  if (!prefix) throw new Error("Prefix must be designated!");
  if (!suffix) suffix = "default";
  const containerId = `${prefix}.${suffix}`;
  const foundServiceType = serviceRecord[containerId];

  return Container.get(foundServiceType);
};

export const getContainerByCompanyUrlPath = (prefix: string): any => {
  const [, pathName] = window.location.pathname.split("/");
  return getContainer(prefix, pathName);
};

export default { getContainer, getContainerByCompanyUrlPath };
