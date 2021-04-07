import React from "react";
import { useRouteMatch, Link } from 'react-router-dom';

interface DetailsParams {
  cpf: string;
}

const Details: React.FC = () => {
  const { params } = useRouteMatch<DetailsParams>();

  return (
    <>
      <h1>details</h1>);
    </>
  )
}

export default Details;
