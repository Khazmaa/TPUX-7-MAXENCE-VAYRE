
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Home from "./pages/Home";
import Chaininfo from "./pages/Chaininfo";
import './App.css';
import ErrorPage from "./pages/ErrorPage";
import FakeBayc from "./pages/FakeBayc";
import FakeBaycTokenInfo from "./pages/FakeBaycTokenInfo";

const App = () => {
  return (
    <div>
      <h1>Site de TP UX </h1>
    
      
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/chaininfo" element={<Chaininfo />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/FakeBayc" element={<FakeBayc />} />
          <Route path="*" element={<Home />} />
          <Route path="/FakeBaycTokenInfo" element={<FakeBaycTokenInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
