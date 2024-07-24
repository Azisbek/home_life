import React from "react";

const CatalogPage = ({ data }) => {
  return (
    <div>
      {data.map((el) => {
        return <p key={el.title}>{el.title}</p>;
      })}
    </div>
  );
};

export default CatalogPage;
