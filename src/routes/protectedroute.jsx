import React from "react";
import { Route, Routes } from "react-router-dom";
import ClusterList from "../containers/ClusterList";
import Console from "../containers/Console";
import Creations from "../containers/Creation";

import Logout from "../containers/Logout";
import Usage from "../containers/Usage";
import Verification from "../containers/Verification";
import Account from "../containers/Account";
import Billing from "../containers/Billing";
import Invoice from "../containers/Invoice";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/verification" element={<Verification />} />
      <Route path="/mainapp" element={<Console />} />
      <Route path="/creations" element={<Creations />} />
      <Route path="/cluster-list" element={<ClusterList />} />
      <Route path="/usage" element={<Usage />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/account" element={<Account />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/invoice" element={<Invoice />} />
    </Routes>
  );
};

export default AppRoutes;
