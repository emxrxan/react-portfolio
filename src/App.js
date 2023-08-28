import React from "react";
import { Fragment, useState } from "react";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import context from "./Context";
import DetailContainer from "./Components/DetailContainer/DetailContainer";

function App() {

  const [detail, setDetails] = useState({});
  const [showDetail, setShowDetail] = useState(null);

  return (
    <Fragment>
      <Header />

      <context.Provider value={{detail, setDetails, showDetail, setShowDetail}}>
        
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/Projects" element={<Projects />}/>
        </Routes>

        <DetailContainer />
      </context.Provider>
    </Fragment>
  );
}

export default App;
