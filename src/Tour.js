import React, { useState } from "react";

const Tour = ({ data, clearClickHandler }) => {
  const [readMore, setReadMore] = useState(false);
  const clickHandler = () => {
    if (readMore) setReadMore(false);
    else setReadMore(true);
  };
  return (
    <article className="single-tour">
      <img src={data.image} alt={data.name}></img>
      <footer>
        <div className="tour-info">
          <h4>{data.name}</h4>
          <h4 className="tour-price">${data.price}</h4>
        </div>
        <p>
          {" "}
          {readMore ? data.info : `${data.info.substring(0, 200)}...`}{" "}
          <button onClick={clickHandler}>
            {readMore ? `read less` : `read more`}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => clearClickHandler(data.id)}
        >
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
