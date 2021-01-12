/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const login = /* GraphQL */ `
  query Login {
    login {
      email
      password
      authClient
    }
  }
`;
export const myLambda = /* GraphQL */ `
  query MyLambda {
    myLambda
  }
`;
export const estabeleciment = /* GraphQL */ `
  query Estabeleciment($params: QueryEstabelecimentParamsInput!) {
    estabeleciment(params: $params) {
      name
    }
  }
`;
