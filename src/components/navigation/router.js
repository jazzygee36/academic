import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Index = lazy(() => import("../pages/index"));

const Routers = () => {
  return (
    <Router>
      <Suspense fallback={<div style={{textAlign:"center", marginTop:"70%", color:"red"}}>CodingTek Academic...</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Routers;
