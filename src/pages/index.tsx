import { Routes, Route } from "react-router-dom";
import { CreateTask } from "./createtask/createtask";
import Main from "./main/main";

const Routing = () => {
  return (
    <Routes>
      <Route path="/:category?" element={<Main />} />
    </Routes>
  );
};

export default Routing;
