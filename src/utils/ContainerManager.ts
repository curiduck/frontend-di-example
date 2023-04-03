import "reflect-metadata";
import Container from "typedi";
import { DefaultCompanyServiceImpl } from "../services/CompanyServices/DefaultCompanyServieImpl";
import { GoodNewsCompanyServiceImpl } from "../services/CompanyServices/GoodNewsCompanyServiceImpl";
import { HttpConnectorServiceImpl } from "../services/ConnectorService/HttpConnectorServiceImpl";
import { SocketConnectorServiceImpl } from "../services/ConnectorService/SocketConnectorServiceImpl";

// Dependency Loading
Container.set({
  id: "connector.socket",
  type: SocketConnectorServiceImpl,
});

Container.set({
  id: "connector.http",
  type: HttpConnectorServiceImpl,
});

Container.set({
  id: "company.default",
  type: DefaultCompanyServiceImpl,
});

Container.set({
  id: "company.goodnews",
  type: GoodNewsCompanyServiceImpl,
});

export const getContainer = (prefix: string, suffix: string) => {
  if (!prefix) throw new Error("Prefix must be designated!");
  if (!suffix) suffix = "default";
  const containerId = `${prefix}.${suffix}`;
  console.log("containerId", containerId);
  return Container.get(containerId);
};

export const getContainerByCompanyUrlPath: Container = (prefix: string) => {
  const urlTokens = window.location.pathname.split("/");
  const companyUrlToken = urlTokens[urlTokens.length - 1];
  return getContainer(prefix, companyUrlToken);
};

export default { getContainer, getContainerByCompanyUrlPath };
