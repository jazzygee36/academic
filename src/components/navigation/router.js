import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Index = lazy(() => import("../pages/index"));
const Payment = lazy(() =>import("../pages/payment/visualPayment"))
const VisiblePayment = lazy(() =>import("../pages/payment/visiblePayment"))
const Plan =lazy(() => import("../pages/plan/plan"))
const Register = lazy(() => import("../pages/register/register"))
const Login = lazy(() => import("../pages/login/login"))
const MainPage =lazy(() => import("../pages/mainPage/index"))

const Routers = () => {
  return (
    <Router>
      <Suspense fallback={<div style={{textAlign:"center", marginTop:"70%", color:"red"}}>CodingTek Academic...</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/visualPayment" element={<Payment />} />
          <Route path="/visiblePayment" element={<VisiblePayment />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/index" element={<MainPage />}/>
         
          
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Routers;
