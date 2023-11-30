import React from "react";

const singleProduct = ({ params }) => {
  //   console.log(params);
  return (
    <div>
      <h1>this is single product {params?.id}</h1>
    </div>
  );
};

export default singleProduct;
