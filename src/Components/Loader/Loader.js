import React from "react";
import {Loading} from './Loader.styled';

const Loader = ({isLoading}) => {

  if (!isLoading) {
    return null;
  }

  return (
    <div className="loader">
      <Loading>Carregando...</Loading>
    </div>
  )

}

export default Loader;