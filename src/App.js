import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

function App() {
  const client = new ApolloClient ({
    uri: 'https://graphql-pokemon2.vercel.app/'
  });
  return (
    <div className="App">
      <ApolloProvider client={client}>
      <main>
        I'm a pokemon!
      </main>
      </ApolloProvider>
    </div>
  );
}

export default App;
