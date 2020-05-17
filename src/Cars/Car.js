import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class Car extends Component {
  render() {
    const props = this.props;
    console.log({ props });

    if (!props.data.car) {
      return <p>loading...</p>;
    }

    return (
      <div>
        <h2>{props.data.car.title}</h2>
        <strong>{props.data.car.carMeta.price}</strong>
        <br />
        <strong>{props.data.car.carMeta.hp}</strong>
      </div>
    );
  }
}

const GetCarBySlug = gql`
  query getCarBySlug($slug: String) {
    car: carBy(uri: $slug) {
      title
      carMeta {
        price
        hp
      }
    }
  }
`;
export default graphql(GetCarBySlug, {
  options: (props) => {
    const slug = props.match.params.slug;
    return {
      variables: {
        slug,
      },
    };
  },
})(Car);
