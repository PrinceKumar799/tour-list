import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { type } from "@testing-library/user-event/dist/type";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tourData, setTourData] = useState([]);

  const fetchTours = () => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTourData(data))
      .then(setLoading(false));
  };
  useEffect(() => {
    fetchTours();
  }, []);

  const clearClickHandler = (id) => {
    const newTourData = tourData.filter((data) => id !== data.id);
    setTourData(newTourData);
  };
  if (loading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  }

  if (tourData.length === 0) {
    return (
      <main>
        <div>
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tourData={tourData} clearClickHandler={clearClickHandler}></Tours>
    </main>
  );
}

export default App;
