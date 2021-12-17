import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import HomePage from "./pages/Homepage";
import UseToggle from "./hooks/useToggle";
import UseAsync from "./hooks/useAsync";
import UseAuth from "./hooks/useAuth";
import UseRouter from "./hooks/useRouter";

import "./App.css";
import { PageContainer } from "./components/PageBox";
import { ProvideAuth } from "./hooks/useAuth/useAuth";

const App: React.FC = () => {
  return (
    <ProvideAuth>
      <AllContainer>
        <BrowserRouter>
          <PageContainer>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/useToggle" element={<UseToggle />} />
              <Route path="/useAsync" element={<UseAsync />} />
              <Route path="/useAuth" element={<UseAuth />} />
              <Route path="/useRouter" element={<UseRouter />} />
            </Routes>
          </PageContainer>
        </BrowserRouter>
      </AllContainer>
    </ProvideAuth>
  );
};

export default App;

const AllContainer = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
`;
