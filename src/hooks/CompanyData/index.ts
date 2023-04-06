import { useState, useEffect } from "react";
import { createConnector } from "../../util";

const defaultURL = "https://default.company.io";
const goodNewsCompanyUrl = "https://goodnews.company.io";
const goodTradeUrl = "https://goodtrade.company.io";

type ResponseType = {
  companyData: CompanyData;
  companyDescription: Array<string>;
  companyPhotos: Array<string>;
};

const getPathName = (): string => {
  const [, pathName] = window.location.pathname.split("/");
  return pathName;
};

const getFetchUrl = (): string => {
  switch (getPathName()) {
    case "goodnews":
      return goodNewsCompanyUrl;
    case "goodtrade":
      return goodTradeUrl;
    default:
      return defaultURL;
  }
};

const getResponseData = (): ResponseType => {
  switch (getPathName()) {
    case "goodnews":
      return {
        companyData: {
          name: "굿뉴스 신문사",
          ceoName: "김신문",
          contactNumber: "02-111-1111",
          email: "goodnews@company.io",
          registerNumber: "1214-241-392-117",
        },
        companyDescription: [
          "항상 좋은 소식을 알려주는 언론사입니다.",
          "언제나 빠르고 정확한 설명을 전달해줍니다",
        ],
        companyPhotos: [
          "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_1280.jpg",
          "https://cdn.pixabay.com/photo/2017/05/22/07/20/press-2333329_1280.jpg",
        ],
      };
    case "goodtrade":
      return {
        companyData: {
          name: "잘나가 상사",
          ceoName: "잘나가",
          contactNumber: "103-913-8847",
          email: "growgrow@company.io",
          registerNumber: "1230-888-759-235",
        },
        companyDescription: [
          "잘 팔리는 물건만 수입하는 상사",
          "수출이 필요할땐 언제든 팔아드립니다",
        ],
        companyPhotos: [
          "https://cdn.pixabay.com/photo/2014/04/05/11/20/freighter-315201_1280.jpg",
          "https://cdn.pixabay.com/photo/2015/12/22/08/09/entrepreneur-1103719_1280.jpg",
        ],
      };
    default:
      return {
        companyData: {
          name: "회사 이름",
          ceoName: "CEO 이름",
          contactNumber: "100-111-1111",
          email: "comapny@company.io",
          registerNumber: "1111-222-333-444",
        },
        companyDescription: ["회사 설명 1", " 회사 설명 2"],
        companyPhotos: ["", ""],
      };
  }
};

const defaultCompanyData: CompanyData = {
  name: "회사 이름",
  ceoName: "CEO 이름",
  contactNumber: "100-111-1111",
  email: "comapny@company.io",
  registerNumber: "1111-222-333-444",
};

/** HTTP Connector */
const getHttpConnector = (uri: string) => {
  return createConnector({
    type: "http",
    dataType: "json",
    uri,
  });
};

/** Socket Connector */
const getSocketConnector = (uri: string) => {
  return createConnector({
    type: "socket",
    dataType: "json",
    uri,
  });
};

/** Connector 생성 분기 */
const getConnector = (uri: string) => {
  switch (getPathName()) {
    case "goodnews":
      return getSocketConnector(uri);
    default:
      return getHttpConnector(uri);
  }
};

/**
 * 회사 데이터를 가지고온다.
 */
export const useCompanyData = () => {
  const [companyData, setCompanyData] =
    useState<CompanyData>(defaultCompanyData);

  useEffect(() => {
    const fetchUrl = getFetchUrl();
    const connector = getConnector(`${fetchUrl}/companyData`);
    connector.send();
    connector.receive();

    // receive 메시지로 데이터를 전달받았다고 가정
    setCompanyData(getResponseData().companyData);
  }, []);

  return [companyData];
};

/**
 * 회사 설명을 가지고 온다.
 */
export const useCompanyDescriptions = () => {
  const [companyDescriptions, setCompanyDescriptions] = useState<Array<string>>(
    []
  );
  useEffect(() => {
    const fetchUrl = getFetchUrl();
    const connector = getConnector(`${fetchUrl}/companyDescription`);
    connector.send();
    connector.receive();

    // receive 메시지로 데이터를 전달받았다고 가정
    setCompanyDescriptions(getResponseData().companyDescription);
  }, []);

  return [companyDescriptions];
};

/**
 * 회사 사진을 가지고 온다.
 */
export const useCompanyPhotos = () => {
  const [companyPhotos, setCompanyPhotos] = useState<Array<string>>([]);

  const fetchUrl = getFetchUrl();
  const connector = getConnector(`${fetchUrl}/companyPhotos`);
  connector.send();
  connector.receive();

  // receive 메시지로 데이터를 전달받았다고 가정
  useEffect(() => {
    setCompanyPhotos(getResponseData().companyPhotos);
  }, []);

  return [companyPhotos];
};
