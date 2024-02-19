import React from "react";
import Profile from "../pages/Profile";
import Company from "../pages/Company";
import Customer from "../pages/Customer";
import { Route,Routes } from "react-router-dom";
import Masters from "../pages/Masters";


const MContain = () => {
  return (
    <div>
      {/* <Profile/> */}
      {/* <Company /> */}
      {/* <Routes>
      <Route path="customer" element={<Customer/>}></Route>
      </Routes> */}
      <Masters/>
      
    </div>
  );
};

export default MContain;
