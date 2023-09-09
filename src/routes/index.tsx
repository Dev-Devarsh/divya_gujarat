import { Route, Routes } from "react-router-dom";
import Landing from "../containers/Landing";

const AppRoutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Landing />} />
        </Routes>
    </>
  );
};

export default AppRoutes;
