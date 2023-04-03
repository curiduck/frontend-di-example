import "reflect-metadata";
import Container from "typedi";
import { DefaultCompanyServiceImpl } from "../services/CompanyServices/DefaultCompanyServieImpl";
import { GoodNewsCompanyServiceImpl } from "../services/CompanyServices/GoodNewsCompanyServiceImpl";

Container.set({
  id: "company.default",
  value: new DefaultCompanyServiceImpl(),
});

Container.set({
  id: "company.goodnews",
  value: new GoodNewsCompanyServiceImpl(),
});

export const getContainer = (prefix: string, suffix: string) => {
  if (!prefix) throw new Error("Prefix must be designated!");
  if (!suffix) suffix = "default";
  const containerId = `${prefix}.${suffix}`;
  return Container.get(containerId);
};

export const getContainerByCompanyUrlPath: Container = (prefix: string) => {
  const urlTokens = window.location.pathname.split("/");
  const companyUrlToken = urlTokens[urlTokens.length - 1];
  return getContainer(prefix, companyUrlToken);
};

export default { getContainer, getContainerByCompanyUrlPath };
