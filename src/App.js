import './App.css';
import Routes from './Routes';
import LanguageIcon from '@material-ui/icons/Language';
import {ApolloClient, ApolloProvider, gql, InMemoryCache} from "@apollo/client";
import React from "react";

const client = new ApolloClient({
    uri: "https://71z1g.sse.codesandbox.io/",
    cache: new InMemoryCache()
});

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;
const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function App() {
  return (
      <ApolloProvider client={client}>
            <div className="App">
              <div className="App-header">
                <div className="float-left">
                  <a className="logo" href="/">
                    LoanAid.AI
                  </a>
                </div>
                <div className="float-right">
                  <button className="btn btn-green">LOGIN</button>
                  <LanguageIcon className="mr-2" />
                  <span className="mr-5"> En </span>
                </div>
              </div>
              <main>
                <Routes />
              </main>
            </div>
      </ApolloProvider>
  );
}

export default App;
