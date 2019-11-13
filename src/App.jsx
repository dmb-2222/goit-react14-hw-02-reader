import React from "react";
import Reader from "./componets/Reader/Readers/Reader";
import publications from "./publications.json";
import "./common/css/Reader.module.css"

const App = () => <Reader publications={publications} />;

export default App;
