import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

const Cars = () => (
  <Query
    query={gql`
      {
        cars {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) {
        return <h1>Loading...</h1>;
      }
      return (
        <div>
          {data.cars.edges.map((car, key) => {
            return (
              <div key={key}>
                <h2>{car.node.title}</h2>
                <Link to={`/car/${car.node.slug}`}>More Info</Link>
              </div>
            );
          })}
        </div>
      );
    }}
  </Query>
);

export default Cars;
