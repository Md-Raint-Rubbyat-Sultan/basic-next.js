import React from "react";

const detailsPage = ({ params, searchParams }) => {
  return (
    <div>
      <h1>this is details page dynamic id: {params?.id}</h1>
      <h1>this is details page query: {searchParams?.category}</h1>
    </div>
  );
};

export default detailsPage;
