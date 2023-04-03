export interface IConnectorService {
  createConnector(destinationUri: string): Connector;
}
