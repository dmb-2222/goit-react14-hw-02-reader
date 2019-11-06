import React from "react";
import Reader from "./componets/Reader/Readers/Reader";
import "./common/css/reader.scss";
import publications from "./publications.json";

const App = () => {
  return (
    <div>
      <Reader publications={publications} />
    </div>
  );
};

export default App;
