import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ClusterList from "../containers/ClusterList";
import Console from "../containers/Console";
import Creations from "../containers/Creation";
import Usage from "../containers/Usage";
import Account from "../containers/Account";
import Billing from "../containers/Billing";
import Invoice from "../containers/Invoice";
import Terminal from "../containers/Terminal";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const login = useSelector((state) => state?.auth?.isLogin);
  return (
    <>
      
        <>
          <Routes>
            <Route path="/mainapp" element={<Console />} />
            <Route path="/creations" element={<Creations />} />
            <Route path="/cluster-list" element={<ClusterList />} />
            <Route path="/usage" element={<Usage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/terminal" element={<Terminal />} />
          </Routes>
        </>
    </>
  );
};

export default AppRoutes;
