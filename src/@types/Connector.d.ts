declare type Connector = {
  type: "socket" | "http" | "ssh";
  dataType: "xml" | "json" | "plainText";
  localIp: string;
  destinationUri: string;
  send: () => void;
  receive: () => void;
};
