type ConnectorPropsType = {
  type: Connector["type"];
  dataType: Connector["dataType"];
  uri: string;
};

export const createConnector = ({
  type,
  dataType,
  uri,
}: ConnectorPropsType): Connector => ({
  type,
  dataType,
  localIp: "127.0.0.1",
  destinationUri: uri,
  send: () => {
    console.log("Message send!");
  },
  receive: () => {
    console.log("Message received!");
  },
});
