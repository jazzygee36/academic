import React from "react";
// import { useNavigate } from "react-router-dom";
// import jwt from "jsonwebtoken";
// import { Buffer } from "buffer";
// global.Buffer = Buffer;

const AppIndex = () => {
  // const navigate = useNavigate();

  // async function populateQuote() {
  //   const req = await fetch("http://localhost:5000/api/quote", {
  //     headers: {
  //       "x-access-token": localStorage.getItem("token"),
  //     },
  //   });
  //   const data = req.json();
  //   console.log(data);
  // }

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const user = jwt.decode(token);
  //     if (!user) {
  //       localStorage.removeItem("token");
  //       navigate = "/login";
  //     } else {
  //       populateQuote();
  //     }
  //   }
  // }, []);

  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

export default AppIndex;
