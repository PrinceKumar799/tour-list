import React from "react";
import Tour from "./Tour";
const Tours = ({ tourData, clearClickHandler }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>

      <div>
        {tourData.map((data) => (
          <Tour
            data={data}
            key={data.id}
            clearClickHandler={clearClickHandler}
          ></Tour>
        ))}
      </div>
    </section>
  );
};

export default Tours;
