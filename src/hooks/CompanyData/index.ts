import { useState, useEffect } from "react";
import { createConnector } from "../../util";

const fetchURL = "https://default.company.io";

const defaultCompanyData: CompanyData = {
  name: "회사 이름",
  ceoName: "CEO 이름",
  contactNumber: "100-111-1111",
  email: "comapny@company.io",
  registerNumber: "1111-222-333-444",
};

const getHttpConnector = (uri: string) => {
  return createConnector({
    type: "http",
    dataType: "json",
    uri,
  });
};

/**
 * 회사 데이터를 가지고온다.
 */
export const useCompanyData = () => {
  const [companyData, setCompanyData] =
    useState<CompanyData>(defaultCompanyData);

  useEffect(() => {
    const connector = getHttpConnector(`${fetchURL}/companyData`);
    connector.send();
    connector.receive();

    // receive 메시지로 데이터를 전달받았다고 가정
    setCompanyData({
      name: "잘나가 상사",
      ceoName: "잘나가",
      contactNumber: "103-913-8847",
      email: "growgrow@company.io",
      registerNumber: "1230-888-759-235",
    });
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
    const connector = getHttpConnector(`${fetchURL}/companyDescription`);
    connector.send();
    connector.receive();

    // receive 메시지로 데이터를 전달받았다고 가정
    setCompanyDescriptions([
      "잘 팔리는 물건만 수입하는 상사",
      "수출이 필요할땐 언제든 팔아드립니다",
    ]);
  }, []);

  return [companyDescriptions];
};

/**
 * 회사 사진을 가지고 온다.
 */
export const useCompanyPhotos = () => {
  const [companyPhotos, setCompanyPhotos] = useState<Array<string>>([]);

  const connector = getHttpConnector(`${fetchURL}/companyPhotos`);
  connector.send();
  connector.receive();

  // receive 메시지로 데이터를 전달받았다고 가정
  useEffect(() => {
    setCompanyPhotos([
      "https://cdn.pixabay.com/photo/2014/04/05/11/20/freighter-315201_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/12/22/08/09/entrepreneur-1103719_1280.jpg",
    ]);
  }, []);

  return [companyPhotos];
};
