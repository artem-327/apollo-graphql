import React, { useState } from "react";
import { render } from "react-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { gql, useQuery } from '@apollo/client';
import { NetworkStatus } from '@apollo/client';

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
function Dogs({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name="dog" onChange={onDogSelected}>
      {data.dogs.map(dog => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
}

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
  const [selectedDog, setSelectedDog] = useState('affenpinscher');

  function onDogSelected({ target }) {
    setSelectedDog(target.value);
  }

  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Building Query components 🚀</h2>
        <Dogs onDogSelected={onDogSelected}/>
        <br/>
        <DogPhoto breed={selectedDog} />
      </div>
    </ApolloProvider>
  );
}

render(<App />, document.getElementById("root"));
