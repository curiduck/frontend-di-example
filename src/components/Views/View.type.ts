import React from "react";

export interface ViewInterface {
  fetchCompanyDescription(): void;
  fetchCompanyPhoto(): void;
  render(): JSX.Element;
}
