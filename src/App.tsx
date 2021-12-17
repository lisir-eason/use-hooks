import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import HomePage from "./pages/Homepage";
import UseToggle from "./hooks/useToggle";
import UseAsync from "./hooks/useAsync";

import "./App.css";
import { PageContainer } from "./components/PageBox";

const App: React.FC = () => {
  return (
    <AllContainer>
      <BrowserRouter>
        <PageContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/useToggle" element={<UseToggle />} />
            <Route path="/useAsync" element={<UseAsync />} />
          </Routes>
        </PageContainer>
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
