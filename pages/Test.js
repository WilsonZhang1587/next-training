import React from "react";
// import fetch from "isomorphic-unfetch"

const Test = ({ data }) => {
  return (
    <div>
      {data.goldRates.map((item, index) => (
        <div key={index}>
          <div>{item.type}</div>
          <div>{item.entryDate}</div>
        </div>
      ))}
    </div>
  );
};

Test.getInitialProps = async () => {
  const res = await fetch(
    "API url"
  );
  const json = await res.json();

  return {
    data: json,
  };
};

export default Test;
