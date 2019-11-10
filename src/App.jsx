import React from "react";
import Reader from "./componets/Reader/Readers/Reader";
import publications from "./publications.json";

const App = () => <Reader publications={publications} />;

export default App;
