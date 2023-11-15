import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Chatpage from "./Chatpage";
import Javapage from "./Javapage";
import Nodepage from "./nodepage";
const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/nodepage" element={<Nodepage />} />
        <Route path="/javapage" element={<Javapage />} />
        <Route path="/chatpage" element={<Chatpage />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
