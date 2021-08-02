import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

function App() {
  const client = new ApolloClient ({
    uri: 'https://graphql-pokemon2.vercel.app/'
  });
  return (
    <div className="App">
      <h3>HELLO WORLD</h3>

    </div>
  );
}

export default App;
