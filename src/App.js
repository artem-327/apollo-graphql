import './App.css';
import Routes from './Routes';
import LanguageIcon from '@material-ui/icons/Language';
import {ApolloClient, ApolloProvider, gql, InMemoryCache, NetworkStatus, useQuery} from "@apollo/client";
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
function DogPhoto({ breed }) {
    const { loading, error, data, refetch, networkStatus } = useQuery(GET_DOG_PHOTO, {
        variables: { breed },
        notifyOnNetworkStatusChange: true,
        // pollInterval: 3000,
    });

    if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
    if (loading) return null;
    if (error) return `Error! ${error}`;

    return (<>
            <img src={data.dog.displayImage} style={{ height: 300, width: 300 }} alt="dog" />
            <button onClick={() => refetch()}>Refetch!</button></>
    );
}
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
