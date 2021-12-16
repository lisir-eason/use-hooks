import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import UseToggle from "./hooks/useToggle";
import HomePage from "./pages/Homepage";

import "./App.css";

const App: React.FC = () => {
  return (
    <AllContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/useToggle" element={<UseToggle />} />
        </Routes>
      </BrowserRouter>
    </AllContainer>
  );
};

export default App;

const AllContainer = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
`;
