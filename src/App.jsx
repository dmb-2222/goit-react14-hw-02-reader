import React from "react";
import Reader from './componets/Reader/Readers/Reader'
import  './common/css/reader.css'
import publications from './publications.json'


function App() {
  return (
    <div>
      <Reader publications = {publications}/>
    </div>
  );
}

export default App;
