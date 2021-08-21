import React from "react";
import { useQuery, gql } from "@apollo/client";

function About() {
  const GET_ALL_HEALTH_RECORDS = gql`
    query QUERY_HEALTH_RECORDS {
      health_data {
        age
        happiness
        id
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_ALL_HEALTH_RECORDS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.health_data.map(({ id, age, happiness }) => (
    <div key={id}>
      <p>
        id: {id}, age: {age}, happiness: {happiness},
      </p>
    </div>
  ));
}

export default About;
