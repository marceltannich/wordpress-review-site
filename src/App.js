import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";
import Cars from "./Cars/Cars";
import Car from "./Cars/Car";

const client = new ApolloClient({
  uri: "https://dev.marceltannich.com/graphql",
});

function App() {
  return (
    /* jshint ignore:start */
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <header>
            <h1>Car Review</h1>
          </header>
          <div className="content">
            <Route exact path="/" component={Cars} />
            <Route path="/cars" component={Cars} />
            <Route path="/car/:slug" component={Car} />
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
    /* jshint ignore:end */
  );
}

export default App;
